## Module 10 - Logo SVG Generator

# Description
Simple CLI program that builds a basic svg file from user input.  Uses inquirer npm for prompts, node.js and jest for test cases.

> **Note**:We were provided starter test code (shapes.test.js, svg.test.js) by instructional staff and wrote our code accordingly. Although the other requirements were to create test cases for all shapes, we were instructed to not edit the test code, only work within our own files.

# Notes
```md
    I used the latest versions of jest and inquirer and ran into issues with inoperability across CommonJS and EMS formats.  I referenced the documentation for both the Node version I'm running (18.~), inquirer, and jest, to troubleshoot.

    I imported the require function from the node:modules library to do a cheeky workaround and make the import syntax match what we've done in class, and updated the package.json properties. (adding "type": "module", and replacing "main": "index.js" with "exports": "./index.js").  I also had to change the file type suffixes to cjs vs js (CommonJS) in order to make node.js happy and stop spitting at me.
```

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to get a graphic designer
```

## Acceptance Criteria

```md
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
```

## Pseudo code:
```md
 - create 3 files, indexjs, shapesjs, svgjs
    index js
    -import inquirer (const inquirer = require('inquirer'))
    -built in node thing fs (writeFile) 
    -questions=
        prompt1: wut text u want
        {
        type: 'input',
        message: 'wat u say',
        name: 'text',
        },

    prompt2 textcolor
    type: input
    message: wut color text u wan
    name: textcolor

    prompt 3 shapes
        type: list
        message: "pick a shape'
        name: shape
        choices:[circle, square, triangle]
    prompt4 shape color
    type: input
    message: "pick color shape"
    name: shapecolor

    inquirer.prompt(blahblah) <-after this runs, create new .svg file named 'logo.svg'
        needs switch cases or if else for import shape classes depend on user input/choice
    svg file when generated should say in console "generated logo.svg"

    shapes js
        ref test file: class constructor
        parent - shape
        classes circle, triangle, square
        setColor function
        render function > should return backtick template lit 
    svg js
    ref test file> svg class constr
        class svg constructor
        -takes text and shape choice input
        setText function (text input, text color choice)
        render function >return backtick template literal ${this.stuff}
        include if text is longer than 3 char, error message
        setShape function (take shape input and run render from shape js?)
```
## Walkthrough Video 
Link to video walkthrough
https://drive.google.com/file/d/1_Lqm9frFvpSsjuBCxKH7BHoHO2O3nB20/view

# References 
Link of documentation references I used for working around cjs & esm
node.js :
- (https://nodejs.org/docs/latest-v18.x/api/module.html#modulecreaterequirefilename)
- (https://nodejs.org/docs/latest-v18.x/api/esm.html#interoperability-with-commonjs)
inquirer: (https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/README.md#reactive)
ESM package: (https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
