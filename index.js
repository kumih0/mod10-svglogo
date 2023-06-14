import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import inquirer from 'inquirer';
const fs = require('fs');
const  { Square, Triangle, Circle } = require('./lib/shapes.cjs');
const SVG = require('./lib/svg.cjs');

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
    shapetype.setColor(shapecolor);

    const svg = new SVG();
    svg.setText(text, textcolor);
    svg.setShape(shapetype);
    console.log(svg.render());
    fs.writeFile('./logo.svg', svg.render(), (err) => {err ? console.log(err) : console.log('it works dummy')});
})

// .then(function() {
//     console.log(text, textcolor, shape, shapecolor);


// function generateSVG({text, textcolor, shape, shapecolor}) {
//     return inquirer.prompt(questions).then(generateSVG({text, textcolor, shape, shapecolor})