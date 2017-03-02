#!/usr/bin/env python

###############
### Imports ###
###############
import unirest
import json
import os

url = "https://graph.facebook.com/v2.3/386187304737858?key=value&access_token=1612242452369236|d07a7705c394f53b3ee19e9d61bbf614"
response = unirest.get(url)
raw_response = response.raw_body
data = json.loads(raw_response) # format json into python usable array
likes = data["likes"]

if likes == 975:
	os.system("echo 'Siren Apparel just got its 975th like!' | mail -s 'Siren Apparel Notification' 'frewin.christopher@gmail.com'")

if likes == 980:
	os.system("echo 'Siren Apparel just got its 980th like!' | mail -s 'Siren Apparel Notification' 'frewin.christopher@gmail.com'")

if likes == 990:
	os.system("echo 'Siren Apparel just got its 990th like!' | mail -s 'Siren Apparel Notification' 'frewin.christopher@gmail.com'")

if likes == 1000:
	os.system("echo 'Siren Apparel just got its 1000th like!' | mail -s 'Siren Apparel Notification' 'frewin.christopher@gmail.com'")

