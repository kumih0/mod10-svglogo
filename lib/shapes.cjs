class Shape{
    constructor(){
        this.shapecolor = '';
    }
    setColor(shapecolor){
    this.shapecolor = shapecolor;
}}

class Circle extends Shape{
    constructor(shapecolor){
        super(shapecolor);
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />`;
    }
}

class Square extends Shape{
    constructor(shapecolor){
        super(shapecolor);
    }
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapecolor}" />`;
    }
}

class Triangle extends Shape{
    constructor(shapecolor){
        super(shapecolor);
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`;
    }
}

module.exports = { Square, Triangle, Circle };