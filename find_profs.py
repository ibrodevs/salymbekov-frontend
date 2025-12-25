#!/usr/bin/env python3
"""Fix missing professor data by consolidating from all sources."""

import json

with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

# Check all keys that might be educational/professional
all_keys = list(ru_data.keys())
education_sections = ['education', 'applicant', 'clinical']

# Find all potential professor data sections
professor_locations = {}
for key in all_keys:
    if isinstance(ru_data[key], dict):
        for subkey in ru_data[key].keys():
            if subkey in ['potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']:
                if subkey not in professor_locations:
                    professor_locations[subkey] = []
                professor_locations[subkey].append((key, subkey))

print("Professor data found at:")
for prof, locations in professor_locations.items():
    print(f"\n{prof}:")
    for parent_key, prof_key in locations:
        print(f"  - ru_data['{parent_key}']['{prof_key}']")
