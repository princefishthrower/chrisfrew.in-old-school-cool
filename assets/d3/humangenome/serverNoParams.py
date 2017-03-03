import sys
import json
import twobitreader

dBaseOpp = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
dCodons = {'AAA': 'leu',
'AAT': 'leu',
'AAC': 'leu',
'AAG': 'leu',
'ATA': 'leu',
'ATT': 'leu',
'ATC': 'leu',
'ATG': 'leu',
'ACA': 'leu',
'ACT': 'leu',
'ACC': 'leu',
'ACG': 'leu',
'AGA': 'leu',
'AGT': 'leu',
'AGC': 'leu',
'AGG': 'leu',
'TAA': 'stop',
'TAT': 'leu',
'TAC': 'leu',
'TAG': 'stop',
'TTA': 'leu',
'TTT': 'leu',
'TTC': 'leu',
'TTG': 'leu',
'TCA': 'leu',
'TCT': 'leu',
'TCC': 'leu',
'TCG': 'leu',
'TGA': 'stop',
'TGT': 'leu',
'TGC': 'leu',
'TGG': 'leu',
'CAA': 'leu',
'CAT': 'leu',
'CAC': 'leu',
'CAG': 'leu',
'CTA': 'leu',
'CTT': 'leu',
'CTC': 'leu',
'CTG': 'leu',
'CCA': 'leu',
'CCT': 'leu',
'CCC': 'leu',
'CCG': 'leu',
'CGA': 'leu',
'CGT': 'leu',
'CGC': 'leu',
'CGG': 'leu',
'GAA': 'leu',
'GAT': 'leu',
'GAC': 'leu',
'GAG': 'leu',
'GTA': 'leu',
'GTT': 'leu',
'GTC': 'leu',
'GTG': 'leu',
'GCA': 'leu',
'GCT': 'leu',
'GCC': 'leu',
'GCG': 'leu',
'GGA': 'leu',
'GGT': 'leu',
'GGC': 'leu',
'GGG': 'leu',
}

# read the file and get the slice of base pairs from the chromosome
oHumanGenome = twobitreader.TwoBitFile('humanGenome.2bit') 
array = oHumanGenome["chr1"].get_slice(100100,100500)
jsonArray = [] # the array to return (filled with javascript objects, leave as just base for now)
memberName = ""
count = 1
for i in range(1,len(array)-2):
	if array[i-1].islower() or array[i].islower() or array[i+1].islower(): # we skip over the lowercase bases (repeated genes found in the human genome)
		continue

	memberName = dCodons[array[i-1:i+2]] # reference the dict for the protien codes
	jsonArray.append({'base': array[i].upper(), 
		              'baseOpp': dBaseOpp[array[i]],
		              'protien': memberName,
		              'protienPos': count}) # reference the opposite base dictionary and add it as a property
	memberName = ""
	count = count + 1
	if count == 4:
		count = 1

# Send it to stdout (to PHP)
jsonData = json.dumps(jsonArray)
print jsonData