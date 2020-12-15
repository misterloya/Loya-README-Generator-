// function to generate markdown for README
function generateMarkdown(data) {
  return ` 

  ### Github Username ###
  
  github.com/${data.username} 


  ### Email ###
  
  ${data.email}
  
  
  ### Table of Contents ### 
  
  * [Installation](#installation)
  * [Description](#description)
  * [License](#license)
  * [Contributors](#contributors)

  
  ### Installation ###

  ${data.installation}

  
  ### Description ###

  ${data.description}

  ### Usage ###

  ${data.usage}

  ### License ###

  ${badgeMaker(data.license)}

  ### Contributing ### 


`;
// need to expand this to include installation functions

}

function badgeMaker (license) {
  if (license === "none"){
    return "";
  }
  else {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  }
};


module.exports = generateMarkdown;
