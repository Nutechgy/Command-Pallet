const fs = require('fs');
const { generateLogo } = require(generateLogo.test.js');

jest.mock('inquire' , () => ({
  prompt: jest.fn(),}));

describe('generateLogo', () => {
    it('generates logo with valid input', async () => {
        // Test case code goes here
    });

    it('handles invalid input gracefully', async () => {
        // Test case code goes here
    });
});

it('generates logo with valid input', async () => {
    // Mock user input
    inquirer.prompt.mockResolvedValueOnce({
        text: 'ABC',
        textColor: 'black',
        shape: 'circle',
        shapeColor: 'blue',
    });

    // Run the function
    await generateLogo();

    // Check if logo.svg file is created
    expect(fs.existsSync('logo.svg')).toBe(true);
});
async function generateLogo() {
    // Original function code
}

module.exports = { generateLogo };
