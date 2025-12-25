#!/usr/bin/env python3
"""Final fix for remaining missing fields."""

import json

with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

# RU - fix position using science1 section
print("Fixing RU file...")
profs_missing_pos_ru = ['potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

for prof in profs_missing_pos_ru:
    if prof in ru_data['science'] and ('position' not in ru_data['science'][prof] or not ru_data['science'][prof]['position']):
        # Try to get from science1 section which has old structure
        if 'science1' in ru_data and prof in ru_data['science1']:
            sci1_prof = ru_data['science1'][prof]
            pos = sci1_prof.get('positionValue')
            if pos:
                ru_data['science'][prof]['position'] = pos
                print(f"  ✅ {prof}: Set position from science1")
            else:
                print(f"  ⚠️  {prof}: No positionValue in science1")

# EN - fix missing descriptions from the root level data (that was at line 3070 before deletion)
# Those old data blocks had description field

print("\nFixing EN file...")
profs_missing_desc_en = [
    ('osmonov', 'Head of Andrology Department, Kiel Clinic, Germany. Leading specialist in andrology with expertise in male reproductive medicine and phalloprosthetics.'),
    ('kachibek', 'Doctor of Medical Sciences, Professor with extensive experience in teaching and research. Active in international scientific cooperation.'),
    ('kubatov', 'Sports specialist and diplomat with extensive experience in sports development and international cooperation.'),
    ('shaltakova', 'Candidate of Medical Sciences; qualified surgeon specializing in laser medicine and cosmetology.')
]

for prof, desc in profs_missing_desc_en:
    if prof in en_data['science'] and ('description' not in en_data['science'][prof] or not en_data['science'][prof]['description']):
        en_data['science'][prof]['description'] = desc
        print(f"  ✅ {prof}: Set description")

# Save both files
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("\n✅ Files saved!")
