// 3. 생성자의 prototype 상속 방법 3
// 이전 방법들은 Ellipse 생성자 안에서 정의한 프로퍼티(this.a, this.b)를 Circle 생성자 안에서 다시 정의했음
// 이번엔 Ellipse 생성자에서 만든 프로퍼티를 Circle 생성자 안으로 가져오는 방법

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

// Circle 안에서 프로퍼티를 별도로 생성할 필요없이
// Ellipse 생성자를 빌려와서 프로퍼티를 정의합니다
function Circle(r) {
    Ellipse.call(this, r, r);
    // 이곳에서 새로운 프로퍼티를 작성하거나, 기존의 프로퍼티를 덮어쓸 수 있음.
}

Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});
Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
};

var circle = new Circle(2);
console.log(circle.getArea());    // → 12.566370614359172
console.log(circle.toString());   // → Circle 2 2
