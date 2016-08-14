SHELL := /bin/bash
PATH  := ./node_modules/.bin:$(PATH)

PORT ?= 4000
CASES := $(shell ls cases/)

all: install copy
	@ cat lib/index.template > index.html
	@ echo "<ul>" $(foreach F,$(CASES),"<li><a href=\"cases/$(F)\">$(F)</a></li>") "</ul>" >> index.html

install:
	@ npm install

copy: lib/react.js lib/react-dom.js

# This is assuming you've got react hosted in the same directory
lib/%.js: ../react/build/%.js
	@ cp $< $@
	@ echo "Updated $*"

serve: all
	@ php -S "localhost:$(PORT)"

test: all
	@ echo Testing against $(shell grep -oh "\w*React v.*" lib/react.js)
	@ node_modules/.bin/wdio wdio.conf.js

selenium:
	@ java -jar ./bin/selenium-server-standalone.jar

.PHONY: all install test serve chromedriver selenium
