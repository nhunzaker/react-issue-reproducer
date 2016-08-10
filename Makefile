cases := $(shell ls cases/)

all:
	@ cat lib/index.template > index.html
	@ echo "<ul>\n" $(foreach file, $(cases), "  <li>$(file)</li>") "\n</ul>" >> index.html

.PHONY: all
