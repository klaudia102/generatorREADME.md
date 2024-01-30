// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}  ${generateLicenseBadg(data.License)}\n

## Table of Contents:

1. [Description](#Description)
2. [Instalation](#Instalation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Questions](#Questions)\n

## Description\n
${data.Description}\n

## Instalation\n
${data.Instalation}\

## Usage\n
${data.Usage}\n
 Video demo of application: ${data.video} \n

## License\n
This application is cover under ${data.License}. \n

## Contributing\n
${data.Contribution}\n

## Tests\n
${data.Tests}\n

## Questions\n
 This application has been created by  ${data.GitHubName} https://github.com/${data.GitHubName}. 
 If you have any question please send me an email ${data.email}.\n

`;
}
 function generateLicenseBadg(licenseName) {
  if (licenseName ==='Apache License 2.0') {
      return '[![License: Apache](https://img.shields.io/badge/License-Apache-green.svg)](https://opensource.org/license/apache-2-0/)'
  } if (licenseName === 'GNU General Public License v3.0') {
    return '[![License: GNU](https://img.shields.io/badge/License-GNU-red.svg)](https://opensource.org/license/gpl-3-0/)'
  } if (licenseName ==='MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (licenseName === 'The BSD 2-Clause Simplified License') {
    return '[![License: BSD2](https://img.shields.io/badge/License-BSD2-blue.svg)](https://opensource.org/license/bsdpluspatent/)'
  }
  else { 
    return '[![License: MIT](https://img.shields.io/badge/License-Eclipse-white.svg)](https://opensource.org/licenses/MIT)'
  } `$(licenseName)`
 }
module.exports = generateMarkdown;

return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/epl-2-0/)'
