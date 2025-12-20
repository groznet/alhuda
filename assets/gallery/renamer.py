import os
import re

# Supported image extensions
EXTENSIONS = ('.jpg', '.jpeg', '.png', '.gif', '.webp')

# List files in current directory
files = [f for f in os.listdir('.') if f.lower().endswith(EXTENSIONS)]

# Sort files to rename in consistent order
files.sort()

# Regex to skip already numbered files (e.g., 1.jpg, 2.png)
numbered_pattern = re.compile(r'^\d+\.\w+$')

counter = 1
for f in files:
    if numbered_pattern.match(f):
        continue  # skip already numbered files

    ext = os.path.splitext(f)[1].lower()
    new_name = f"{counter}{ext}"

    # Avoid overwriting existing files
    while os.path.exists(new_name):
        counter += 1
        new_name = f"{counter}{ext}"

    os.rename(f, new_name)
    counter += 1

print("Renaming completed!")
