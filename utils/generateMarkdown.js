// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}\n
## Description\n
${data.Description}\n
## Table of Contents\n
${data.Content}\n
## Instalation\n
${data.Instalation}\n
## Usage\n
${data.Usage}\n
## License\n
${data.License}\n
## Badges\n
${data.Badges}\n
## Feature\n
${data.Feature}\n
## Contributing\n
${data.Contribution}\n
## Tests\n
${data.Tests}\n
## Questions\n
${data.Questions}\n
`;
}

module.exports = generateMarkdown;
