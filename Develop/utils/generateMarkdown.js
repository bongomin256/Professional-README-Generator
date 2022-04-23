// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let MIT =
    "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  let Mozilla =
    "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  let ISC =
    "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
  let IBM =
    "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
  if (license === "MIT") {
    return MIT;
  } else if (license === "Mozilla") {
    return Mozilla;
  } else if (license === "ISC") {
    return ISC;
  } else if (license === "IBM") {
    return IBM;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "ISC") {
    return "[ISC](https://opensource.org/licenses/ISC)";
  } else if (license === "IBM") {
    return "[IBM](https://opensource.org/licenses/IPL-1.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `
  ## License
  ${renderLicenseBadge(license)}.
  The license's link ${renderLicenseLink(license)}`;

  if (!license) {
    return "";
  } else {
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of content
    
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributiing)
  - [Test](#test)
  - [Questions](#questions)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Screenshot](#screenshot)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions
  This is the link to my [Github profile](https://github.com/${data.github})
  Incase of any question[s] or suggestion[s] concerning this appication, please contact me through this email:(${
    data.email
  })
  ## Links
  - [Github repo](${data.repo})
  - [Link to a walk through video](${data.deploy})
  ## Screenshots
  ![screenshot](./Develop/${data.screenshot1})
  ![screenshot](./Develop/${data.screenshot2})
`;
}

module.exports = generateMarkdown;
