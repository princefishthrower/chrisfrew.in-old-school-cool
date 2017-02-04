import sys
import json
import twobitreader

# Load the data that PHP sent us
try:
    params = json.loads(sys.argv[1])
except:
    print "ERROR"
    sys.exit(1)

# keep same naming conventions of the passed parameters as in the php script
sStock  = params[0]
sOption = params[1]
sPrice  = params[2]
sNote   = params[3]

with open('test.txt') as myfile:
    myfile.write(sStock)
    myfile.write(sOption)
    myfile.write(sPrice)
    myfile.write(sNote)

####################################
### Load and append to JSON File ###
####################################
with open('stockAlerts.json') as jsonfile:
    arrayJsonFile = json.load(jsonfile)
    jsonfile.close()

jsonLastEntry = arrayJsonFile[-1] # last entry of our running entries
jsonString = "{ stock:" + sStock  + ", option: " + sOption + ", price: " + sPrice + ", note: " + sNote + "}"
jsonEntry = json.load(jsonString)
arrayJsonFile.append(jsonEntry) # add this new json entry
with open("stockAlerts.json", "w") as jsonfile:
    jsonfile.write(json.dumps(arrayJsonFile)) # write the newly appened array as a json array back to the file, overwriting the old file
    jsonfile.close()

print json.dumps(arrayJsonFile)