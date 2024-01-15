// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}\n
## Description\n
${data.Description}\n
## Instalation\n
${data.Instalation}\n
## Usage\n
${data.Usage}\n
## Credits\n
${data.Credits}\n
## License\n
${data.License}\n
## Badges\n
${data.Badges}\n
## Feature\n
${data.Feature}\n
## Contribution\n
${data.Contribution}\n
## Tests\n
${data.Tests}\n
## Link\n
${data.Link}\n
`;
}

module.exports = generateMarkdown;
