#!/usr/bin/env python3
"""Add positions to kubatov and shaltakova in EN from KG"""

import json

# Load KG
with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

# Load EN
with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

kg_science = kg_data['science']
en_science = en_data.get('science', {})

# Fix missing positions
to_fix = ['kubatov', 'shaltakova']

print("Adding positions to EN professors:")
for prof_key in to_fix:
    if prof_key in kg_science and prof_key in en_science:
        kg_position = kg_science[prof_key].get('position', '')
        en_science[prof_key]['position'] = kg_position
        print(f"  ✓ {prof_key}: added position = '{kg_position[:50]}'")
    else:
        print(f"  ✗ {prof_key}: not found")

# Save
with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("\n✅ EN file updated")

# Verify
with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_verify = json.load(f)

print("\nFinal verification - EN professors:")
count = 0
for key in ['seanPark', 'pendharkar', 'potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova', 'bilgaziev']:
    if key in en_verify.get('science', {}):
        prof = en_verify['science'][key]
        has_position = 'position' in prof
        has_desc = 'description' in prof
        if has_position and has_desc:
            count += 1
            print(f"  ✓ {key}")
        else:
            print(f"  ✗ {key}: position={has_position}, description={has_desc}")
    else:
        print(f"  ✗ {key}: MISSING")

print(f"\n✅ Complete professors: {count}/10")
