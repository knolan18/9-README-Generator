// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none') {
    if (license.indexOf(" ") === -1 ) {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    var licenseSplit = license.split(" ")
    return `![GitHub license](https://img.shields.io/badge/license-${licenseSplit[0]}%20${licenseSplit[1]}-blue.svg)`
  }

  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none') {
    return `* [License](#license)`
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none') {
    return `## License
  
  This project is licensed under the ${license} license.`
  }
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

# Table of Contents
* [Description](#description)
* [Dependencies](#dependencies)
* [Repository Information](#repository information)
* [Contriburtions](#contributions)
* [Test Commands](#testCommand)
* [Contact](#contact)
${renderLicenseLink(data.license)}

## Description

${data.description}

## Dependencies

# ${data.dependencies}

## Repository Information

# ${data.contributions}

## License

${renderLicenseSection(data.license)}

## Test Commands

# ${data.testCommand}

## Contact

[Git Hub](https://github.com/${data.username})

[${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
