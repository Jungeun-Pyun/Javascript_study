// ECMAScript 6에서 추가된 클래스 구문
// 클래스 구문의 종류
// 1. 클래스 선언문
// 2. 클래스 표현식

// 함수 선언문
// function Circle(center, radius){
//     this.center = center;
//     this.radius = radius;
// }
// Circle.prototype.area = function(){
//     return Math.PI*this.radius*this.radius;
// };

// 1. 클래스 선언문
class Circle { //Circle : 생성자 함수의 이름 === 클래스 이름
    //class내에 하나의 constructor 존재, 프로퍼티 모두 정의
    constructor(center, radius) { 
        this.center = center;
        this.radius = radius;
    }
    // constructor 이후에 작성된 클래스 멤버 : *prototype*의 메서드
    area() {
        return Math.PI*this.radius*this.radius;
    }
}

// 클래스 선언문과 함수 선언문의 차이
// hoisting 안됨, 생성자 사용전 정의
// 클래스 선언문은 한번만 작성 가능 (덮어쓰기 안됨), 두개 이상 선언되면 에러
// 클래스 선언문에 정의한 생성자만 따로 호출 불가 : 게터, 세터로 접근 필요????


// 2. 클래스 표현식
var Circle = class {
    constructor(center, radius) { 
        this.center = center;
        this.radius = radius;
    }
    area() {
        return Math.PI*this.radius*this.radius;
    }
}











var c = new Circle({x: 0, y: 0}, 2);
console.log(c.area());  // → 12.566370614359172



