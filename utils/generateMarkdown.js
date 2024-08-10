// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/license-MIT-blue";
      break;
    case "GNU GPLv3":
      return "https://img.shields.io/badge/license-%20%20GNU%20GPLv3%20-green?style=plastic";
      break;
    case "Apache 2.0":
      return "https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square";
      break;
    case "MPL 2.0":
      return "https://img.shields.io/badge/license-MPL%202.0-black";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "https://opensource.org/license/mit";
      break;
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "MPL 2.0":
      return "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "None":
      return "";
      break;
    default:
      return `This project is licensed under the ${license} license.`;
      break
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  let licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title}
  ![License Badge](${licenseBadge})

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usageInformation}

  ## Contribution
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions
  For any and all questions, please contact me here:
  - GitHub: https://github.com/${data.githubUsername}
  - Email: ${data.emailAddress}

  ## License
  [${licenseSection}](#${licenseLink})\n
`;
}

export default generateMarkdown;
