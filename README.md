
## Pseudo code:
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
    svg file when generated should say in console "generated logo.svg"

shapes js
    test file: class constructor
    parent - shape
    classes circle, triangle, square
    setColor function
    render function > should return backtick template lit 
svg js
    class svg constructor
    -takes text and shape choice input
    setText function (text input, text color choice)
    render function >return backtick template literal ${this.stuff}
    include if text is longer than 3 char, error message
    setShape function (take shape input and run render from shape js?)