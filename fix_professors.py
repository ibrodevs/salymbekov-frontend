#!/usr/bin/env python3
"""Fix professor translations by adding them to science section in all files."""

import json

# Load all three translation files
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

# Professor names to work with
professors = ['seanPark', 'pendharkar', 'potapova', 'osmonov', 'bilgaziev', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

# For each professor, ensure they exist in science section for all files
for prof in professors:
    # Get data from different sources
    ru_root_data = ru_data.get(prof, {})
    en_root_data = en_data.get(prof, {})
    kg_science_data = kg_data['science'].get(prof, {})
    
    # If root data doesn't have education/experience, use from KG
    if prof in ru_data and 'education' not in ru_data[prof] and 'education' in kg_science_data:
        ru_data[prof]['education'] = kg_science_data['education']
    if prof in ru_data and 'experience' not in ru_data[prof] and 'experience' in kg_science_data:
        ru_data[prof]['experience'] = kg_science_data['experience']
    if prof in ru_data and 'achievements' not in ru_data[prof] and 'achievements' in kg_science_data:
        ru_data[prof]['achievements'] = kg_science_data['achievements']
    
    if prof in en_data and 'education' not in en_data[prof] and 'education' in kg_science_data:
        en_data[prof]['education'] = kg_science_data['education']
    if prof in en_data and 'experience' not in en_data[prof] and 'experience' in kg_science_data:
        en_data[prof]['experience'] = kg_science_data['experience']
    if prof in en_data and 'achievements' not in en_data[prof] and 'achievements' in kg_science_data:
        en_data[prof]['achievements'] = kg_science_data['achievements']
    
    # Add to science section if not already there
    if prof not in ru_data['science'] and prof in ru_data:
        ru_data['science'][prof] = ru_data[prof]
    
    if prof not in en_data['science'] and prof in en_data:
        en_data['science'][prof] = en_data[prof]
    
    print(f"✅ {prof} - added/updated in science section")

# Save the fixed files
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("\n✅ Files saved successfully!")

# Verify
print("\n=== VERIFICATION ===")
for lang, path in [('RU', 'src/locales/ru/translation.json'), ('EN', 'src/locales/en/translation.json'), ('KG', 'src/locales/kg/translation.json')]:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    profs_in_science = [k for k in professors if k in data['science']]
    print(f"\n{lang}: {len(profs_in_science)}/10 professors in science section")
    for prof in professors:
        in_science = '✅' if prof in data['science'] else '❌'
        in_root = '⚠️ ' if prof in data and lang != 'KG' else '✅'
        print(f"  {prof}: science={in_science}, root={in_root}")
