#!/usr/bin/env python3
"""Remove old professor blocks from RU file by text manipulation."""

with open('src/locales/ru/translation.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Split content to find and remove the old professor block
# Old block starts after "achievements" of pendharkar (line 1665) and ends before "international" (line 2061)

import re

# Find the section with old professors
# It's everything from ",\n    "potapova":" to "},\n  }\n  },\n  "international":"

# More precise: find from the closing }, of pendharkar to just before "international"
pattern = r',\n    "potapova": \{[^}]*"education": \[.*?\],\n      "experience": \[.*?\],\n      "achievements": \[.*?\]\n    }\n  },\n  "international":'

# This is too complex. Let's use a simpler approach:
# Find "potapova" with educationItems (old) and remove entire blocks until "international"

# Find the position of old potapova (has "educationItems")
old_potapova_start = content.find('"potapova": {\n      "name": "Ольга Потапова",\n      "title": "Специалист по трансляционной онкологии и диагностике",')

if old_potapova_start > 0:
    print(f"Found old potapova at position {old_potapova_start} (around line {content[:old_potapova_start].count(chr(10))+1})")
    
    # Find international key - it's after the old professor block
    international_pos = content.find('"international": {', old_potapova_start)
    
    if international_pos > 0:
        # Extract what's between the comma before potapova and international
        # We need: text up to the comma before "potapova", then text from "international"
        
        comma_before_potapova = content.rfind(',', 0, old_potapova_start)
        print(f"Found international at position {international_pos} (around line {content[:international_pos].count(chr(10))+1})")
        print(f"Comma before potapova at position {comma_before_potapova}")
        
        # Remove from comma+newline after pendharkar achievements to just before international
        new_content = content[:comma_before_potapova] + '\n  },\n  "international"' + content[international_pos + len('"international"'):]
        
        with open('src/locales/ru/translation.json', 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print("✅ Old professor blocks removed!")
else:
    print("❌ Could not find old potapova block")
