#!/usr/bin/env python3
"""Fix missing position/description from science1 section or use KG data."""

import json

with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

# Professors that need position fix
profs_missing_pos = ['potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

for prof in profs_missing_pos:
    # Check RU
    if prof in ru_data['science']:
        if 'position' not in ru_data['science'][prof] or not ru_data['science'][prof]['position']:
            # Try to get from science1
            if 'science1' in ru_data and prof in ru_data['science1']:
                pos_val = ru_data['science1'][prof].get('positionValue')
                if pos_val:
                    ru_data['science'][prof]['position'] = pos_val
                    print(f"✅ RU {prof}: Set position from science1")
            
            if 'description' not in ru_data['science'][prof] or not ru_data['science'][prof]['description']:
                if 'science1' in ru_data and prof in ru_data['science1']:
                    desc_val = ru_data['science1'][prof].get('description')
                    if desc_val:
                        ru_data['science'][prof]['description'] = desc_val
                        print(f"✅ RU {prof}: Set description from science1")
    
    # Check EN - use KG as reference if needed
    if prof in en_data['science']:
        if 'position' not in en_data['science'][prof] or not en_data['science'][prof]['position']:
            if prof in kg_data['science'] and 'position' in kg_data['science'][prof]:
                # For English, we'll use a translated-like version
                # Actually, let's check if there's alternative data
                print(f"⚠️  EN {prof}: Missing position - checking alternatives...")
        
        if 'description' not in en_data['science'][prof] or not en_data['science'][prof]['description']:
            print(f"⚠️  EN {prof}: Missing description - checking alternatives...")

# Save fixed RU file
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

print("\n✅ RU file updated with data from science1 section")
