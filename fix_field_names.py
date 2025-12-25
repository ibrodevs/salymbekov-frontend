#!/usr/bin/env python3
"""Fix professor field names in EN and RU to match what Professors.jsx expects."""

import json

# Load all files
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

profs_to_fix = ['potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

# Fix EN file - it has both old and new field names
print("Fixing EN file...")
for prof in profs_to_fix:
    if prof in en_data['science']:
        prof_data = en_data['science'][prof]
        
        # If it has positionValue but not position, fix it
        if 'positionValue' in prof_data and ('position' not in prof_data or not prof_data['position']):
            prof_data['position'] = prof_data['positionValue']
            print(f"  ✅ {prof}: Set position from positionValue")
        
        # If it doesn't have description, try other fields
        if ('description' not in prof_data or not prof_data['description']):
            # The description is already there in the copied version
            print(f"  ⚠️  {prof}: description seems to be missing")

# Fix RU file - apply KG structure as template if needed
print("\nFixing RU file...")
with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

for prof in profs_to_fix:
    if prof in ru_data['science']:
        prof_data = ru_data['science'][prof]
        
        # Ensure position exists
        if 'position' not in prof_data or not prof_data['position']:
            if 'science1' in ru_data and prof in ru_data['science1']:
                pos_val = ru_data['science1'][prof].get('positionValue')
                if pos_val:
                    prof_data['position'] = pos_val
                    print(f"  ✅ {prof}: Set position from science1.positionValue")
        
        # Ensure description exists
        if 'description' not in prof_data or not prof_data['description']:
            if 'science1' in ru_data and prof in ru_data['science1']:
                desc = ru_data['science1'][prof].get('description')
                if desc:
                    prof_data['description'] = desc
                    print(f"  ✅ {prof}: Set description from science1")

# Save files
with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

print("\n✅ Files saved!")
