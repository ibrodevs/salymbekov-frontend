#!/usr/bin/env python3
"""Remove duplicate professor definitions that have old field names."""

import json
import re

# Load RU data as string to manually remove duplicates
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Load as JSON to work with
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_data = json.load(f)

# Find and remove old professor defs (they use positionValue, educationItems, etc)
# We'll re-save the data without those old ones

# List of professors - remove old ones by filtering if they have positionValue (old field)
professors_to_check = ['potapova', 'osmonov', 'erkebaev', 'kachibek', 'madaminov', 'kubatov', 'shaltakova']

print("Checking for duplicate professor definitions...")

# The JSON library will automatically use the LAST definition of a key when loading
# So ru_data['science'][prof] has the CORRECT ones from science section (12603-12778)
# We need to find and delete the WRONG ones (1666-2060)

# Strategy: Rewrite the file without the old professor blocks
# Find the patterns to remove:

patterns_to_find = []

# Old potapova at line 1666 has "positionValue" field
for prof in professors_to_check:
    # Find blocks that have educationItems (old structure) for this prof
    pattern = rf'",\s*"{prof}":\s*{{\s*"name":[^}}]*"educationItems":[^}}]*"achievements":'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        print(f"Found old {prof} definition")

print("\nRemoving old definitions by reloading and saving JSON...")

# Save the JSON again - Python will keep the LAST definition of duplicate keys
with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ru_data, f, ensure_ascii=False, indent=2)

print("✅ File saved with duplicate keys resolved (Python JSON keeps last occurrence)")

# Now verify structure
with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    ru_fixed = json.load(f)

print("\nVerifying professors in science section:")
for prof in professors_to_check:
    if prof in ru_fixed['science']:
        prof_data = ru_fixed['science'][prof]
        has_position = 'position' in prof_data
        has_pos_value = 'positionValue' in prof_data
        print(f"  {prof}: position={has_position}, positionValue={has_pos_value}")
