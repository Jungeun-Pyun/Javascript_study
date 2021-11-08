// 생성자 상속
// 객체뿐 아니라 생성자도 상속 가능
// 상속하는 생성자 : 슈퍼 타입 생성자
// 상속받는 생성자 : 서브 타입 생성자

// 타원을 표현하는 객체를 생성하는 생성자 예제
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

// 인스턴스 생성
var ellipse = new Ellipse(5,3);

console.log(ellipse.getArea());   // → 47.12388980384689
console.log(ellipse.toString());  // → Ellipse 5 3

// 생성자로부터 메서드를 상속받았기 때문에 ellipse 인스턴스 자신이 가지고 있지 않은 메서드를 사용 가능
