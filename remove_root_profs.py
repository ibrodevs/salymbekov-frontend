#!/usr/bin/env python3
"""Remove professor data from root level (they should only be in science section)."""

import json

# Load RU and EN files
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

# Professor names to remove from root level
professors = ['seanPark', 'pendharkar', 'potapova', 'osmonov', 'bilgaziev', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

# Remove from root level
for prof in professors:
    if prof in ru_data:
        del ru_data[prof]
        print(f"✅ RU: Deleted {prof} from root level")
    
    if prof in en_data:
        del en_data[prof]
        print(f"✅ EN: Deleted {prof} from root level")

# Save the fixed files
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("\n✅ Files saved successfully!")
print("\n=== FINAL VERIFICATION ===")

for lang, path in [('RU', 'src/locales/ru/translation.json'), ('EN', 'src/locales/en/translation.json')]:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    science_count = sum(1 for prof in professors if prof in data['science'])
    root_count = sum(1 for prof in professors if prof in data)
    
    print(f"\n{lang}:")
    print(f"  In science: {science_count}/10 ✅")
    print(f"  In root: {root_count}/10 {'✅ (Good)' if root_count == 0 else '❌ (Should be 0)'}")
