
const core = require('@actions/core');
var packageInfo = require('./package.json');


try {
   
    core.setOutput("name", packageInfo.name);
    core.setOutput("version", packageInfo.version);
} catch (error) {
    core.setFailed(error.message);
}
