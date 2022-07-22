import fs from 'fs';
import { join } from 'path';
const core = require('@actions/core');

/**
 * Read package.json file
 * @param {string} path
 * @returns {object}
 */
const readPackageJson = function (path) {
    const packageJson = fs.readFileSync(join(path, 'package.json')).toString();

    return JSON.parse(packageJson);
};

try {
   
    const packageInfo = readPackageJson(path);

    core.setOutput("name", packageInfo.name);
    core.setOutput("version", packageInfo.version);
} catch (error) {
    core.setFailed(error.message);
}