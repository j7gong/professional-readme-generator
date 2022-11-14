const renderLicense = function (license) {
    return license.split(" ").join("%20");
};

// If there is no license, return an empty string
const renderBagde = function (license) {
    if (license != 'None') {
        return '![License](https://img.shields.io/badge/License-'+ renderLicense(license) +'-blue.svg)';
    } else {
        return "";
    };
};

module.exports = templateData => {
    templateData = templateData[0];

    return `
# ${templateData.title}

## Description
    ${templateData.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
    ${templateData.installation}
    
## Usage
    ${templateData.usage}

## Credits
    ${templateData.contribution}

## License
    ${templateData.license}

## Badges
${renderBagde(templateData.license)}

## Tests
    ${templateData.test}

## Questions
    Please reach out to me via methods below if you have any questions. 
    Github Profile: https://github.com/${templateData.name},
    Email: ${templateData.email}
    `;
};