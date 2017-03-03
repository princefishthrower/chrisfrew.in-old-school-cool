### Import ###
import sys
### Read number number from count.txt; increment it ###
f = open('count.txt', 'r')
number = int(f.read())+1
f.close()
### Write the incremented number back into count.txt ###
f = open('count.txt', 'w')
f.write(str(number))
f.close()
### Send the incremented number to stdout
sys.stdout.write(str(number))