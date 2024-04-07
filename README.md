# Command-Pallet
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

# SVG Logo Maker

SVG Logo Maker is a command-line application that allows users to create SVG logo files by specifying text, text color, and shape.

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/svg-logo-maker.git`.
2. Navigate to the project directory: `cd svg-logo-maker`.
3. Install dependencies: `npm install`.

## Usage

To use SVG Logo Maker, follow these steps:

1. Run the application: `node index.js`.
2. Follow the prompts to enter text, text color, and shape.
3. Once all prompts are filled, the application will generate an SVG file named `logo.svg` in the project directory.
4. Open `logo.svg` in a web browser to view the generated logo.

## Features

- Accepts user input for text, text color, and shape.
- Supports shapes such as circle, triangle, and square.
- Generates an SVG file based on user input.

## Directory Structure

.
├── lib/ // Folder for classes and functions
│ ├── shapes.js // Contains Triangle, Circle, and Square classes
│ ├── shapes.test.js // Jest tests for shape classes
│ └── more... // Additional files and tests
├── .gitignore // Git ignore file
├── index.js // Main application file
├── package.json // Project metadata and dependencies
└── README.md // Project documentation

bash
Copy code

## Tests

SVG Logo Maker uses Jest for unit testing. To run tests, use the following command:

```bash
npm test
Walkthrough Video
Link to Walkthrough Video - TODO: Insert link to your video demonstration.

The walkthrough video demonstrates how to use the application, shows all tests passing, and showcases a generated SVG logo being opened in a web browser.