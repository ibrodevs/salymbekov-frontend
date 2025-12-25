#!/usr/bin/env python3
"""Add missing professors to RU from KG"""

import json

# Load KG
with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

# Load RU
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

# Professors to add
to_add = ['madaminov', 'kubatov', 'shaltakova']

kg_science = kg_data['science']
ru_science = ru_data.get('science', {})

print("Adding missing professors to RU from KG:")
for prof_key in to_add:
    if prof_key in kg_science:
        kg_prof = kg_science[prof_key]
        # Copy entire structure from KG
        ru_science[prof_key] = kg_prof.copy()
        print(f"  ✓ {prof_key} - added from KG")
    else:
        print(f"  ✗ {prof_key} - not found in KG")

# Save
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

print("\n✅ RU file updated")

# Verify all
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_verify = json.load(f)

print("\nFinal verification - RU professors:")
count = 0
for key in ['seanPark', 'pendharkar', 'potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova', 'bilgaziev']:
    if key in ru_verify.get('science', {}):
        prof = ru_verify['science'][key]
        has_position = 'position' in prof
        has_desc = 'description' in prof
        print(f"  {key}: position={has_position}, description={has_desc}")
        if has_position and has_desc:
            count += 1
    else:
        print(f"  {key}: MISSING")

print(f"\n✅ Complete professors: {count}/10")
