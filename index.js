const fs = require('fs');
const inquirer = require('inquirer');
const chroma = require('chroma-js');

// Define an async function to handle the code containing await
async function getUserInputAndGenerateLogo() {
  try {
    // Prompt user for input
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
      },
    ]);

    // Initialize svgContent
    let svgContent = '';
baseline="middle" text-anchor="middle">b>baseline="middle" text-anchor="middle">${userInput.text}</text>bine="middle" text-anchor="middle">${userInput.text}</text>b
    }


    // Write SVG content to logo.svg file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function to prompt user input and generate logo
getUserInputAndGenerateLogo();
