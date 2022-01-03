const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return "![license badge](https://img.shields.io/static/v1?label=license&message=" + license.replace(/ /g,"_",) + "&color=red)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseString = license.replace(/ /g,"_",);
  var returnString;

  if (!license) {
    return '';
  } else {
    switch (licenseString) {
      case 'GNU_AGPLv3':
        returnString = 'Licensed under the [GNU Affero General Public License v3.0](./utils/GNU_Affero_General_Public_License_v3.0).';
        break;
      case 'MIT':
        returnString = 'Licensed under the [MIT](./utils/MIT) license.';
        break;
      case 'GNU_GPLv3':
        returnString = 'Licensed under the [GNU GPLv3](./utils/GNU_GPLv3) license.';
        break;
      case 'GNU_LGPLv3':
        returnString = 'Licensed under the [GNU LGPLv3](./utils/GNU_LGPLv3) license.'
        break;
      case 'Mozilla_Public_License_2.0':
        returnString = 'Licensed under the [Mozilla Public License 2.0](./utils/Mozilla_Public_License_2.0).';
        break;
      case 'Apache_License_2.0':
        returnString = 'Licensed under the [Apache License 2.0](./utils/Apache_License_2.0).';
        break;
      case 'Boost_Software_License_1.0':
        returnString = 'Licensed under the [Boost Software License 1.0](./utils/Boost_Software_License_1.0).';
        break;
      default:
        returnString = 'Licensed under [The Unlicense](./utils/Unlicense).';
        break;
    }
    return returnString;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  return `## License
  ### ©️2021 

 

  ${renderLicenseLink(license)}
  `;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.TOC) {//with table of contents if TOC = true
    return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table Of Contents
  * [Installation](#Instalation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Testing](#Tesing)
  * [License](#License)
  * [Questions](#Questions)

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, I can be reached at ${data.email} or 
  visit my [GitHub](https://github.com/${data.userName})
  `;
  } else {//without table of contents
    return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, I can be reached at ${data.email} or 
  visit my [GitHub](https://github.com/${data.userName})
  `;
  }


};

module.exports = { generateMarkdown };



