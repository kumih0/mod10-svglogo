const {Square, Triangle, Circle} = require("./shapes");

class SVG{
    constructor(text, textcolor, shape, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
    setText(text, textcolor){
        if(text.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textcolor = textcolor;
    }
}