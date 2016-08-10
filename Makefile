PORT ?= 4000
CASES := $(shell ls cases/)

all: copy
	@ cat lib/index.template > index.html
	@ echo "<ul>" $(foreach F,$(CASES),"<li><a href=\"cases/$(F)\">$(F)</a></li>") "</ul>" >> index.html

copy: lib/react.js lib/react-dom.js

# This is assuming you've got react hosted in the same directory
lib/%.js: ../react/build/%.js
	@ cp $< $@

serve: all
	@ php -S "localhost:$(PORT))"

.PHONY: all
