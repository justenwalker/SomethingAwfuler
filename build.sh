#! /bin/sh

##############
## SETTINGS ##
##############
BUILD_PROFILE="awfuler"        ## Namespace
VERSION=1.0.0-dev	       ## Version
LANGUAGE=en                    ## Language
LOGGING_ENABLED="Y"            ## Enabled logfiles: Y/N
LOG_DIR="logs"                 ## Logfile Directory
RELEASE_DIR="release"          ## Release Directory
DOJO="lib/dojo"                ## Root of the Dojo SDK
PROPS_FILE=userscript.props.js ## UserScript Properties


## How do you get to SRC_DIR from dojo/util
SRC_DIR="src/${BUILD_PROFILE}"
UTIL2SRC_RELPATH="../../../${SRC_DIR}"


###########
## Setup ##
###########
TEE_LOGS=cat
THISDIR=`pwd`
PROG=`basename $0`
DATE=`date +%Y-%m-%d`
LOG="${LOG_DIR}/build_"
DOJO_UTIL="${DOJO}/util"
BUILD_SCRIPT_DIR="${DOJO_UTIL}/buildscripts"
PROFILE_DIR="${BUILD_SCRIPT_DIR}/profiles"
INCLUDES_DOJO_NAME="includes"
INCLUDES_JS_NAME="${INCLUDES_DOJO_NAME}.js"
INCLUDES_JS_PATH="${SRC_DIR}/${INCLUDES_JS_NAME}"
###############
## FUNCTIONS ##
###############
init_logfile () {
	TEE_LOGS=cat
	if [ ! -d ${LOG_DIR} ]; then
		mkdir -p ${LOG_DIR}
	fi
	if [ "${LOGGING_ENABLED}" != "N" ]; then
		LOG=${THISDIR}/${LOG_DIR}/buildlog_${DATE}.log
		TEE_LOGS="tee -a ${LOG}"
		if [ -f "${LOG}" ]; then # Log exists and has content
			## Rotate Logs
			if [ -f "${LOG}.3" ]; then mv ${LOG}.3 ${LOG}.4; fi
			if [ -f "${LOG}.2" ]; then mv ${LOG}.2 ${LOG}.3; fi
			if [ -f "${LOG}.1" ]; then mv ${LOG}.1 ${LOG}.2; fi
			mv "${LOG}" "${LOG}.1"
		fi
	fi
}
log () {
	if [ "${LOGGING_ENABLED}" = "Y" ]; then
		echo "[ `date` ] $1" | tee -a ${LOG}
	else
		echo "[ `date` ] $1"
	fi
}
error () {
	log "ERROR : $1"
	exit 1
}

##############################################################################
# # # # # # # # # # # # # # # MAIN PROGRAM # # # # # # # # # # # # # # # # # #
############################################################################## 

## STEP 1 - Initialize Logs
init_logfile
log "$PROG Build started with parameters: $*"

## STEP 2 - Setup Release Directory
if [ -d "${RELEASE_DIR}" ]; then
	log "Removing old release directory ${RELEASE_DIR}"
	rm -Rf "${RELEASE_DIR}"
fi
mkdir "${RELEASE_DIR}"

log "Removing temp files ending in ~"
find . -name '*~' -exec rm {} \;

## STEP 3 - Gather Dependencies
log "Gathering dependencies..."
echo 'dojo.provide("includes.js");' > "${INCLUDES_JS_PATH}"
find "${SRC_DIR}" -name '*.js' -exec grep '^\s*dojo.require\s*([^;]*;' {} \; | sed -e 's/^\s*//' -e 's/;.*$//' | sort | uniq | tee -a "${INCLUDES_JS_PATH}" | $TEE_LOGS
DEPS=`cat "${INCLUDES_JS_PATH}" | wc -l`
DEPS=$(( $DEPS - 1 ))
log "Found ${DEPS} dependencies"

## STEP 4 - Build Profile
PROFILE_PATH=${PROFILE_DIR}/${BUILD_PROFILE}.profile.js
log "Creating Profile ${PROFILE_PATH}"
cat <<EOF > "${PROFILE_PATH}"
dependencies = {
	layers: [
		{
			name: "${UTIL2SRC_RELPATH}/${BUILD_PROFILE}.js",
			resourceName: "${BUILD_PROFILE}",
			dependencies: [
				"${BUILD_PROFILE}.${INCLUDES_DOJO_NAME}"
			]
		}
	],
	prefixes: [
		[ "dijit", "../dijit" ],
		[ "dojox", "../dojox" ],
		[ "${BUILD_PROFILE}","${UTIL2SRC_RELPATH}"]
	]
}
EOF

## STEP 5 - Run Build Script
log "Building Project ${BUILD_PROFILE}"
cd "${BUILD_SCRIPT_DIR}"
./build.sh profile=${BUILD_PROFILE} action=clean,release optimize=shrinkSafe version=${VERSION} | ${TEE_LOGS}
if [ $? -eq 0 ]; then
	log "Build completed successfully"
else
	error "Build script exited with an unexpected error"
fi

## STEP 5 - Package Release
cd "${THISDIR}"
log "Copying Dojo files"
DOJO_SOURCE="${DOJO}/release/dojo/dojo/dojo.js"
if [ ! -f "${DOJO_SOURCE}" ]; then
	error "Can't find Dojo Source ${DOJO_SOURCE}"
fi
cp "${DOJO_SOURCE}" "${RELEASE_DIR}/dojo.js"
cp "${DOJO_SOURCE}.uncompressed.js" "${RELEASE_DIR}/dojo-uc.js"

log "Copying ${BUILD_PROFILE} files"
SRC=${DOJO}/src/${BUILD_PROFILE}/${BUILD_PROFILE}.js
if [ ! -f "${SRC}" ]; then
	error "Could not find output source file ${SRC}"
fi
cp "${SRC}" "${RELEASE_DIR}/source.js"
cp "${SRC}.uncompressed.js" "${RELEASE_DIR}/source-uc.js"
if [ -d ${DOJO}/src/nls ]; then
	LANG=${DOJO}/src/nls/${BUILD_PROFILE}_${LANGUAGE}.js
	if [ ! -f "${LANG}" ]; then
		error "Could not find output language file ${LANG}"
	fi
	log "Using ${LANG} language file"
else
	log "No languages found"
	LANG="${DOJO}/src/_lang.js"
	echo "" > "${LANG}"
fi
cp "${LANG}" "${RELEASE_DIR}/lang.js"

## STEP 6 - Assemble Source Files

log "Assembling Source Files"

cd "${THISDIR}/${RELEASE_DIR}"
REL_FILE="${BUILD_PROFILE}.user.js"

# Get Properties, replace version number
cat "${THISDIR}/userscript.props.js" | sed "s/#VERSION#/${VERSION}/g" > props.js


cat props.js lang.js dojo.js source.js > "${REL_FILE}"
log "Compressed Script Created"


cat props.js lang.js dojo-uc.js source-uc.js > "uc-${REL_FILE}"
log "Uncompressed Script Created"

## STEP 7 - Clean Up
log "Cleaning Up"
rm props.js lang.js source.js source-uc.js dojo.js dojo-uc.js

cd "${THISDIR}"
rm -Rf "${INCLUDES_JS_PATH}"

log "Release completed! `ls ${RELEASE_DIR}`"
