//importing  require function from node modules so i can use the same import syntax that i'm used to and cheese my way around reinstalling older versions of npm packages. (const x = require('path')) 
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
//importing inquirer npm in ESM updated way 
import inquirer from 'inquirer';
//cheesy stinky workaround to keep usual way of importing builtin and custom modules lol
const fs = require('fs');
const  { Square, Triangle, Circle } = require('./lib/shapes.cjs');
const SVG = require('./lib/svg.cjs');
//question prompt array for inquirer CLI inputs
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is your logo text?',

    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What is the text color for your logo?',

    },
    {
        type: 'list',
        name: 'shape',
        message: 'What is the shape for your logo?',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What is the shape color for your logo?',
    },
]
//running the prompts then destructured obj of user inputs w corresponding names to params.  made a new variable for to hold switch case result. switch cases ref to choice array in shapes list prompt, call on imported class constructor from shapes.js to make selected shape
inquirer.prompt(questions).then(({ text, textcolor, shape, shapecolor }) => {
    let shapetype;
    switch (shape) {
        case 'square':
            shapetype = new Square();
            break;
        case 'circle':
            shapetype = new Circle();
            break;
        case 'triangle':
            shapetype = new Triangle();
            break;
    }
//setting shape color
    shapetype.setColor(shapecolor);
//call on imported svg class constructor and making new svg obj. setText function sets text content and color based on user input (corresponding params). setShape function sets shape based on shapetype. 
    const svg = new SVG();
    svg.setText(text, textcolor);
    svg.setShape(shapetype);
//writes new svg file with the name 'logo.svg' and rendered based on user inputs.  using svg preview extension in vscode to view it.
    fs.writeFile('./logo.svg', svg.render(), (err) => {err ? console.log(err) : console.log('it works dummy!! U generated logo.svg')});
})