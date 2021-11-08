// 생성자를 상속하는 세 가지 방법
// 1. 생성자의 prototype 상속 방법 1

function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}
// 타원의 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toSting를 덮어쓴다
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};



function Circle(r) {  //생성자 정의
    this.a = r;
    this.b = r;
}

Circle.prototype.test = function() {
    console.log("From circle prototype")
};

var circle = new Circle(2); 

console.log(circle.test());  // → Circle 2 2

//circle의 프로토타임 : Circle.prototype
//Circle.prototype의 프로토타임 : Object.prototype
//circle이 Elipse.prototype의 메서드를 사용할 수 있게끔하기위해 프로토타입 체인에 Ellipse.prototype을 추가

//circle의 프로토타입 : Circle.prototype
//Circle.prototype의 constructor : circle
//인스턴스와 생성자 사이의 연결 고리를 유지하려면 prototype으로 사용할 객체에 constructor 프로퍼티를 정의하고 그 프로퍼티에 생성자의 참조를 대압해야함

//Circle.prototype을 대체할 새로운 Circle.prototype을 생성하면 constructor에 value값을 넣어줘서 생성자와 연결시켜주어야 함
//새로운 Circle.prototype은 Ellipse.prototype을 상속함
Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});

//toString 재정의
Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
};

// Circle 생성자로 circle 인스턴스 다시 생성
var circle = new Circle(2);


console.log(circle.getArea());   // → 12.566370614359172
console.log(circle.toString());  // → Circle 2 2




