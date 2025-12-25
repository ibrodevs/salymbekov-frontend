#!/usr/bin/env python3
"""Fill missing professor fields from KG data."""

import json

# Load all three files
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

with open('src/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

professors = ['potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

# Map of missing fields to get from KG structure
# Note: We'll use KG field names/values to supplement RU/EN
for prof in professors:
    if prof in kg_data['science'] and prof in ru_data['science']:
        kg_prof = kg_data['science'][prof]
        ru_prof = ru_data['science'][prof]
        
        # Fill missing position
        if 'position' not in ru_prof and 'position' in kg_prof:
            # Don't copy Russian position from KG - we need Russian positions
            print(f"  {prof}: Missing position in RU - needs translation")
    
    if prof in kg_data['science'] and prof in en_data['science']:
        kg_prof = kg_data['science'][prof]
        en_prof = en_data['science'][prof]
        
        # Fill missing position
        if 'position' not in en_prof and 'position' in kg_prof:
            print(f"  {prof}: Missing position in EN - needs translation")

print("\n⚠️  Note: Some professor data is missing in RU and EN translations.")
print("     Position and description fields are incomplete for some professors.")
print("     These need to be manually translated or filled from available sources.")
