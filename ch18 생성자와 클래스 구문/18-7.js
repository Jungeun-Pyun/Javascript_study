// 2. 생성자의 prototype 상속 방법 2


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

function Circle(r) {
    this.a = r;
    this.b = r;
}

Circle.prototype = new Ellipse(); //생성자로 인스턴스 새로 만들기
Circle.prototype.constructor = Circle; //constructor 연결

//toString 재정의
Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
};

var circle = new Circle(2);

console.log(circle.getArea());   // → 12.566370614359172
console.log(circle.toString());  // → Circle 2 2


// 단점
// Circle.prototype에 이미 생성된 Ellipse의 프로퍼티를 낭비함
// ???????????