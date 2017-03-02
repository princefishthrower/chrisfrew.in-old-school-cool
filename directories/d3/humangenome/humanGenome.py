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
sChromosome = params[0]
iStart = int(params[1])
iEnd = int(params[2])

dBaseOpp = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
dCodons = {'TTT':	'Phe',		
'TCT':	'Ser',		
'TAT':	'Tyr',		
'TGT':	'Cys',
'TTC':	'Phe',		
'TCC':	'Ser',		
'TAC':	'Tyr',		
'TGC':	'Cys',
'TTA':	'Leu',		
'TCA':	'Ser',		
'TAA':	'Stop',	
'TGA':	'Stop',
'TTG':	'Leu',		
'TCG':	'Ser',		
'TAG':	'Stop',	
'TGG':	'Trp',
'CTT':	'Leu',		
'CCT':	'Pro',		
'CAT':	'His',		
'CGT':	'Arg',
'CTC':	'Leu',		
'CCC':	'Pro',		
'CAC':	'His',		
'CGC':	'Arg',
'CTA':	'Leu',		
'CCA':	'Pro',		
'CAA':	'Gln',		
'CGA':	'Arg',
'CTG':	'Leu',		
'CCG':	'Pro',		
'CAG':	'Gln',		
'CGG':	'Arg',
'ATT':	'Ile',		
'ACT':	'Thr',		
'AAT':	'Asn',		
'AGT':	'Ser',
'ATC':	'Ile',		
'ACC':	'Thr',		
'AAC':	'Asn',		
'AGC':	'Ser',
'ATA':	'Ile',		
'ACA':	'Thr',		
'AAA':	'Lys',		
'AGA':	'Arg',
'ATG':	'Met',	
'ACG':	'Thr',	
'AAG':	'Lys',	
'AGG':	'Arg',
'GTT':	'Val',		
'GCT':	'Ala',		
'GAT':	'Asp',		
'GGT':	'Gly',
'GTC':	'Val',		
'GCC':	'Ala',		
'GAC':	'Asp',		
'GGC':	'Gly',
'GTA':	'Val',		
'GCA':	'Ala',		
'GAA':	'Glu',		
'GGA':	'Gly',
'GTG':	'Val',		
'GCG':	'Ala',		
'GAG':	'Glu',		
'GGG':	'Gly',
}

# read the file and get the slice of base pairs from the chromosome
oHumanGenome = twobitreader.TwoBitFile('humanGenome.2bit') 
array = oHumanGenome[sChromosome].get_slice(iStart,iEnd)
jsonArray = [] # the array to return (filled with javascript objects, leave as just base for now)
memberName = ""
count = 1
for i in range(1,len(array)-2):
	if array[i-1].islower() or array[i].islower() or array[i+1].islower(): # we skip over the lowercase bases (repeated genes found in the human genome)
		continue

	memberName = dCodons[array[i-1:i+2]] # reference the dict for the protien codes
	jsonArray.append({'ind': i,
					  'base': array[i].upper(), 
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
