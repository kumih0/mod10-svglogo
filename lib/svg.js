const Shape = require("./shapes");


class SVG extends Shape{
    constructor(text, textcolor, shape, shapecolor){
        super(shapecolor);
        this.shape = shape;      
        this.text = text;
        this.textcolor = textcolor;
    }
    setText(text, textcolor){
        if(text.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textcolor = textcolor;
    }
    setShape(shape, shapecolor){
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`;
    }
}
module.exports = SVG;