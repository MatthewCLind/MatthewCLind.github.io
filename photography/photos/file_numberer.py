import os
import sys
from random import randint as rand
path = '\\'.join(sys.argv[0].split('\\')[:-1]) + '\\'
files = os.listdir(path)
print files
count = 0
for f in files:
    if f != 'file_numberer.py':
        ext = f.split('.')[-1]
        print f
        temp_name = str(rand(100000, 10000000))
        os.rename(f, temp_name)
        os.rename(temp_name, str(count) + '.' + ext)
        count += 1
        
