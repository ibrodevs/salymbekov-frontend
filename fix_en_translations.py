#!/usr/bin/env python3
"""Fix EN positions with proper English translations"""

import json

# Load EN
with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

en_science = en_data.get('science', {})

# Proper English positions
positions = {
    'kubatov': 'Sports specialist, diplomat, organizer of sports programs',
    'shaltakova': 'Candidate of Medical Sciences; qualified surgeon specializing in laser medicine and cosmetology'
}

print("Fixing EN positions with proper English translations:")
for prof_key, position in positions.items():
    if prof_key in en_science:
        en_science[prof_key]['position'] = position
        print(f"  ✓ {prof_key}: '{position[:60]}'")
    else:
        print(f"  ✗ {prof_key}: not found")

# Save
with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("\n✅ EN file updated with proper English translations")

# Verify
with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_verify = json.load(f)

print("\nFinal verification - EN professors:")
count = 0
for key in ['seanPark', 'pendharkar', 'potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova', 'bilgaziev']:
    if key in en_verify.get('science', {}):
        prof = en_verify['science'][key]
        has_position = 'position' in prof and len(prof['position']) > 0
        has_desc = 'description' in prof and len(prof['description']) > 0
        if has_position and has_desc:
            count += 1
            print(f"  ✓ {key}")
        else:
            print(f"  ✗ {key}: position={has_position}, description={has_desc}")
    else:
        print(f"  ✗ {key}: MISSING")

print(f"\n✅ Complete professors: {count}/10")
