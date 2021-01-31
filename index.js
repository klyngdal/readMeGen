const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    // questions

    //Username
    {
      type: "input",
      name: "username",
      message: "What is your Github username?",
    },

    //title of project
    {
      type: "input",
      name: "title",
      message: "What would you like to name this project?",
    },
    // description
    {
      type: "input",
      name: "description",
      message: "Please enter a brief overview description for this project:",
    },
    //install
    {
      type: "input",
      name: "installation",
      message: "Please describe the installation for this application:",
    },
    // usage
    {
      type: "input",
      name: "usage",
      message: "Please describe the usage of this project:",
    },
    //license
    {
      type: "list",
      name: "license",
      message: "Please select which license you would like to add to your project:",
      choices: ["mit", "gpl-3.0", "bsd"],
    },
    //guildlines
    {
      type: "input",
      name: "contributing",
      message: "Please provider any information on contributing guidelines:",
    },
    //tests
    {
      type: "input",
      name: "test",
      message: "Please provide any information for tests:",
    },
    //Email
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((response) => {
    const createFileName = "README.md";

    let readMeGen = `# **${response.title}**

## Description 
${response.description}

![](ReadMeGen1.gif)

# Table of Contents
1. [Description](#Description)<br>
2. [Installation](#Installation)<br>
3. [Usage](#Usage)<br>
4. [License](License)<br>
5. [Contributing](#Contributing)<br>
6. [Tests](#Tests)<br>
7. [Questions](#Questions)<br>
  
## Installation 
${response.installation}

## Usage 
${response.usage}

## License
This application is covered by the ${response.license} license. 

## Contributing
${response.contributing}

## Tests
${response.test}

## Questions
Follow me on GitHub here: [Github](https://www.github.com/${response.username})<br>
Have additional questions? Contact by email: ${response.email}
`;

    fs.writeFile(createFileName, readMeGen, {}, () => console.log("Thank you! Check out your new README file!"));
  })
  .catch((err) => {
    console.log("oops", err);
  });
