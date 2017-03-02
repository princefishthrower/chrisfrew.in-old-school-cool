###############
### Imports ###
###############
import unirest
import json
import datetime
import os

###########################
### Call to Weather API ###
###########################
url = "http://api.weatherunlocked.com/api/snowreport/222021?app_id=c7597a6d&app_key=9bb24c8a08244c49d375352ae02e8ec5"  
response = unirest.get(url)
print response.raw_body
jsonResponse = json.loads(response.raw_body) # format json into python usable array
print jsonResponse 
oDateTimeResponse = datetime.datetime.strptime(jsonResponse ['reportdate'] + " " + jsonResponse ['reporttime'], "%d/%m/%Y %H:%M") # convert date/time string to datetime object for easy comparing


######################
### Load JSON File ###
######################
with open('skiMonitor.json') as jsonfile:
    arrayJsonFile = json.load(jsonfile)
    jsonfile.close()

jsonLastEntry = arrayJsonFile[-1] # last entry of our running entries
oDateTimeLastEntry = datetime.datetime.strptime(jsonLastEntry['reportdate'] + " " + jsonLastEntry['reporttime'], "%d/%m/%Y %H:%M")

if oDateTimeResponse > oDateTimeLastEntry:
    # append this entry to our json file.
    arrayJsonFile.append(jsonResponse) # add this new json entry
    with open("skiMonitor.json", "w") as jsonfile:
        jsonfile.write(json.dumps(arrayJsonFile)) # write the newly appened array as a json array back to the file, overwriting the old file
        jsonfile.close()

    # also send email alert out to the list
    #emails = ["frewin.christopher@gmail.com", "ver.schranz@gmx.at", "benjaminpetroski@gmail.com", "freddy.oakes@gmail.com", "devon.jedamski@gmail.com", "afrewin15@gmail.com", "mrc263@cornell.edu"]
    emails = ["frewin.christopher@gmail.com"]
    for email in emails:
        mailString  = "mail -s 'The Ski Monitor - Sankt Anton Weather and Trails Update!' " + email + " << MSG_BODY_HERE\n"
        mailString += "Greetings from the Ski Monitor! Here's the most recent weather and trails update:\n\n"
        mailString += "General Report: '" + jsonResponse['conditions'] + "'\n"
        mailString += "The last storm on " + jsonResponse['lastsnow'] + " dropped " + str(jsonResponse['newsnow_cm']) + " cm (" + str(jsonResponse['newsnow_in']) + " in) of snow!\n"
        mailString += "Current snow depth on mountain: " + str(jsonResponse['uppersnow_cm']) + " cm (" + str(jsonResponse['lowersnow_in']) + " in)\n"
        mailString += "Current snow depth at base: " + str(jsonResponse['lowersnow_cm']) + " cm (" + str(jsonResponse['lowersnow_in']) + " in)\n"
        mailString += "     - " + jsonResponse['reportdate'] + " " + jsonResponse['reporttime'] + "\n\n"
        mailString += "Remember, you can always visit the running log including these live updates at:\n"
        mailString += "http://chrisfrew.in/projects/skimonitor/SkiMonitor/webapp/index.html"
        mailString += "\n\n"
        mailString += "See you on the slopes! Stay powdery freeeeeessshhhh!!!!!!!"
        mailString += "\n\n"
        mailString += "MSG_BODY_HERE"
        os.system(mailString)