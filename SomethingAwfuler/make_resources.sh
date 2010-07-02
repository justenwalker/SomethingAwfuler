#! /bin/sh

GMRESGEN_JAR=../GmResourceGenerator/gmresgen.jar
RESOURCES_JS=src/awfuler/resources.js

if [ ! -f ${GMRESGEN_JAR} ]; then
	echo "Can't find Greasemonkey Resource Generator: ${GMRESGEN_JAR}"
	exit 1
fi

if [ ! -d `dirname ${RESOURCES_JS}` ]; then
	echo "Can't find resources directory: `dirname ${RESOURCES_JS}`"
	exit 1
fi

which java > /dev/null 2>&1
if [ $? -ne 0 ]; then
	echo "Can't find java!"
	exit 1
fi 

get_json() {
	java -jar ${GMRESGEN_JAR} "$1" "$2"
}

echo "Building ${RESOURCES_JS}"

echo "dojo.provide("awfuler.resources");" > ${RESOURCES_JS}
echo "dojo.mixin(awfuler," >> ${RESOURCES_JS}

echo `get_json "resources" "resources"` >> ${RESOURCES_JS}

echo ");" >> ${RESOURCES_JS}

echo "Done Building ${RESOURCES_JS}!"
