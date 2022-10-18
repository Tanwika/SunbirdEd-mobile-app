#!/bin/bash

const shell = require('child_process').execSync
var pathList = [
    "platforms/android/cordova-plugin-badge/app-badge.gradle",
    "platforms/android/com-sarriaroman-photoviewer/app-photoviewer.gradle"
]
for (let i = 0; i < pathList.length; i++) {
    if(process.platform == "darwin") {
        shell(`sed -i "" "s!compile!implementation!g" ${pathList[i]}`)
    } else {
        shell(`sed -i "s!compile!implementation!g" ${pathList[i]}`)
    }
  }