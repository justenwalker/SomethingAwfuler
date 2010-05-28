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

get_url() {
	java -jar ${GMRESGEN_JAR} "$1"
}

echo "Building ${RESOURCES_JS}"

cat <<EOF > ${RESOURCES_JS}
dojo.provide("awfuler.resources");
dojo.mixin(awfuler,
{
	resources: {
EOF

for RES in `find resources`
do
	if [ -f ${RES} ]; then
		URL=`get_url "$RES"`
		FILENAME=`basename $RES | sed -e 's/[.][^.]\+$//' -e 's/ /_/g'`
		echo "\"${FILENAME}\": '${URL}'," | sed 's/^/\t\t/' >> ${RESOURCES_JS}
		echo "$RES Done."
	fi	
done

cat <<EOF >> ${RESOURCES_JS}
		_:0
	}
});
EOF

echo "Done Building ${RESOURCES_JS}!"
