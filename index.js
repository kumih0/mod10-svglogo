const fs =require('fs');
const inquirer = require('inquirer');
const Shape = require('./lib/shapes');
const SVG = require('./lib/svg');

const questions = [
    {
        type: 'input',
        name: 'text',
        message:'What is your logo text?',
        
    },
    {
        type: 'input',
        name: 'textcolor',
        message:'What is the text color for your logo?',

    },
    {
        type: 'list',
        name: 'shape',
        message:'What is the shape for your logo?',
        choices: ['square', 'circle', 'triangle'], 
    },
    {
        type: 'input',
        name: 'shapecolor',
        message:'What is the shape color for your logo?',
    },
]

 inquirer.prompt(questions).then(answers, function({text, textcolor, shape, shapecolor}) {
        const svg = new SVG();
        svg.setText(text, textcolor);
        const shape = new Shape();
        shape.setColor(shapecolor);
        svg.setShape(shape);
        fs.writeFile('logo.svg', svg.render());
    })

// .then(function() {
//     console.log(text, textcolor, shape, shapecolor);


// function generateSVG({text, textcolor, shape, shapecolor}) {
//     return inquirer.prompt(questions).then(generateSVG({text, textcolor, shape, shapecolor})