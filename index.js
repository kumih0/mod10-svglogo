import fs from 'fs';
import inquirer from 'inquirer';
import { Square, Triangle, Circle } from './lib/shapes';
import { SVG } from './lib/svg';

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
    fs.writeFile('logo.svg', svg.render());
})

// .then(function() {
//     console.log(text, textcolor, shape, shapecolor);


// function generateSVG({text, textcolor, shape, shapecolor}) {
//     return inquirer.prompt(questions).then(generateSVG({text, textcolor, shape, shapecolor})