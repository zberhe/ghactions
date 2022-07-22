import fs from 'fs';
const path = require('path');
const core = require('@actions/core');

/**
 * Read package.json file
 * @param {string} path
 * @returns {object}
 */
const readPackageJson = function (path1) {
    const packageJson = fs.readFileSync(path.join(path1, 'package.json')).toString();

    return JSON.parse(packageJson);
};

try {
   
    const packageInfo = readPackageJson(path);

    core.setOutput("name", packageInfo.name);
    core.setOutput("version", packageInfo.version);
} catch (error) {
    core.setFailed(error.message);
}
