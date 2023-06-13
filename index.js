const fs =require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message:'What is your logo text?',
        
    },
    {
        type: 'input',
        name: 'color',
        message:'What is the text color for your logo?',

    },
    {
        type: 'list',
        name: 'shape',
        message:'What is the shape for your logo?',
        choices: ['square', 'circle', 'triangle'], 
    },
    {
        