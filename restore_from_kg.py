#!/usr/bin/env python3
"""Restore missing professors in RU from KG"""

import json

# Load KG as reference
with open('src/locales/kg/translation.json', 'r', encoding='utf-8') as f:
    kg_data = json.load(f)

# Load RU
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

# Professors that need restoration
to_restore = ['potapova', 'osmonov', 'erkebaev', 'kachibek']

kg_science = kg_data['science']
ru_science = ru_data.get('science', {})

print("Restoring professors to RU from KG:")
for prof_key in to_restore:
    if prof_key in kg_science:
        kg_prof = kg_science[prof_key]
        
        # Copy from KG but keep RU text
        if prof_key in ru_science:
            ru_prof = ru_science[prof_key]
            # Take KG structure but preserve Russian names/descriptions if available
            # KG has good structure, use it as base
            new_prof = {
                "name": ru_prof.get("name", kg_prof.get("name")),
                "position": kg_prof.get("position", ""),
                "description": ru_prof.get("description", kg_prof.get("description")),
                "education": kg_prof.get("education", []),
                "experience": kg_prof.get("experience", []),
                "achievements": kg_prof.get("achievements", [])
            }
            ru_science[prof_key] = new_prof
            print(f"  ✓ {prof_key} - restored with structure")
        else:
            print(f"  ✗ {prof_key} - not found in RU")
    else:
        print(f"  ✗ {prof_key} - not found in KG")

# Save
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

print("\n✅ RU file updated")

# Verify
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_verify = json.load(f)

print("\nVerification - RU professors:")
for key in ['seanPark', 'pendharkar', 'potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova', 'bilgaziev']:
    if key in ru_verify.get('science', {}):
        prof = ru_verify['science'][key]
        has_position = 'position' in prof
        print(f"  {key}: position={has_position}")
    else:
        print(f"  {key}: MISSING")
