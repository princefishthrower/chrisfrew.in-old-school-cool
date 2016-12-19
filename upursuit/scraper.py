#!/usr/bin/env python

import contextlib
import selenium.webdriver as webdriver
from selenium.webdriver import Firefox 
import selenium.webdriver.support.ui as ui

# use firefox to get page with javascript generated content
with contextlib.closing(webdriver.Firefox()) as driver:
	driver.get('http://chrisfrew.in/projects/upursuit/siteload.html')
	wait = ui.WebDriverWait(driver,500) # wait up to 5 minutes for page to load
	wait.until(lambda driver: driver.find_element_by_id('printingcomplete')) # appears as last line in printed javascript
	print(driver.page_source) # print the source to terminal
	
f = open('sourcecode.html', 'w')
f.write(driver.page_source.encode('utf-8'))