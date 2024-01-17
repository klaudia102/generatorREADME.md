// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}\n

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

## License\n
//  ${generateLicenseBadg(data.License)} \n

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
    return  `This application is cover under Apache License 2.0 license`;
  } if (licenseName === 'GNU General Public License v3.0') {
 return `This application is cover under GNU General Public License v3.0 license.`
  } if (licenseName ==='MIT License') {
   return '[![This application is cover under MIT License.](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (licenseName === 'The BSD 2-Clause Simplified License') {
    return `This application is cover under The BSD 3 New or Revised License.`
  }
  else { 
    return `This application is cover under The BSD 3 New or Revised License.`
  } `$(licenseName)`
 }
module.exports = generateMarkdown;

return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'