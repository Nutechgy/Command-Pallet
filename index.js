const fs = require('fs');
const inquirer = require('inquirer');
const chroma = require('chroma-js');

async function generateLogo() {
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

  // Generate SVG content
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <rect width="100%" height="100%" fill="${chroma(userInput.shapeColor)}"/>
    <text x="50%" y="50%" font-size="30" fill="${chroma(userInput.textColor)}" dominant-baseline="middle" text-anchor="middle">${userInput.text}</text>
  </svg>
  `;

  // Write SVG content to logo.svg file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

// Run the logo generation function
generateLogo();

