//example 1
function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return 'This ' + this.type + ' is ' + this.color + ' .';
}

let lime = new Fruit('Viet Nam');
console.log(lime.getInformation());

lime.color = 'pink';
console.log(lime.getInformation())
console.log('---------');

//example 2
function Fruit2(type) {
    this.type = type;
    this.color = 'unknown';
}
Fruit2.prototype.getInformation = function () {
    return 'This ' + this.type + ' is ' + this.color +  ' .';
}

let limes = new Fruit2('Thai Binh');
console.log(limes.getInformation());

lime.color = 'yellow';
console.log(limes.getInformation());

console.log('---------');


//example class 3
let Polygon = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Polygon);
let p = new Polygon(2,3);
console.log('p: ', p)
console.log('---------');

//example class 4
class Violet {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea () {
        return this.height * this.width;
    }
}

const square = new Violet(23,33);
console.log(square.getArea());

// example inheritance
console.log('----------Example Inheritance-----------');
class Retangle {
    constructor(w,h) {
        this.w = w;
        this.h = h;
    }
}

Retangle.prototype.area = function() {
    return this.w * this.h;
}
class Square extends Retangle {
    constructor(s) {
        super(s);
        this.w = s;
        this.h = s;
    }
}

const rec = new Retangle(6,4);
console.log('Rec ', rec.area());