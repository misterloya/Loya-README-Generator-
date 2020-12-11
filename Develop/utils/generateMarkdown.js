// function to generate markdown for README
function generateMarkdown(data) {
  return ` 

  ### Github Username ###
  
  ${data.username}

  ### Email ### 
  
  ${data.email}

  ### Title ###

  ${data.title}

  ### License ###

  ${data.license}

 





`;
}

module.exports = generateMarkdown;
