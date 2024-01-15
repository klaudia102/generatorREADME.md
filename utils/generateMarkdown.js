// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}\n
## Description\n
${data.Description}\n
## Table of Contents:\n
[[TOC]]
## Instalation\n
${data.Instalation}\n
## Usage\n
${data.Usage}\n
## License\n
 This application is cover under ${data.License} license.\n
## Contributing\n
${data.Contribution}\n
## Tests\n
${data.Tests}\n
## Questions\n
 This application has been created by  ${data.GitHubName} https://github.com/${data.GitHubName}. 
 If you have any question please send me an email ${data.email}.\n
`;
}

module.exports = generateMarkdown;
