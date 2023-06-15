//Parent class constructor SVG, defining text and shape as properties to receive input from user prompts when run in indexjs inquirer prompts.  defined as empty strings in reference to test cases, some tests receive both shape and text params while others have either/or.  Must define as something or test fails-default is 'undefined' and cannot read 'undefined'
class SVG {
    constructor(){   
        this.text = '';
        this.shape = '';
    }
    setText(text, textcolor){
        //if user inputs more than 3 characters, spits back error message as ref in test case
        if(text.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }
        //simplified text to include textcolor param within the tem lit string 
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;

    }    
    setShape(shape){
        this.shape = shape.render();

    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }

}
//exports svg class constructor
module.exports = SVG;