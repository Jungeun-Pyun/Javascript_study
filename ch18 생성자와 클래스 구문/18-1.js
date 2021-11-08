// 생성자 : new 연산자와 함께 사용하여 객체를 생성(초기화)하는 함수
// java나 c++은 클래스를 이용하여 프로퍼티를 갖는 객체를 여러개 생성할 수 있음 (붕어빵틀로 여러개의 붕어빵을 찍어내는 것)
// js에는 클래스가 없는 대신 생성자라는 함수로 이름이 같은 메서드와 프로퍼티를 가진 객체를 여러개 생성 가능


// js는 프로토타입 상속에 기반을 둔 객체 지향 언어
// 상속이란 특정 객체가 다른 객체로부터 기능을 이어받는 것
// 상속을 사용하면 기존 객체에 정의된 프로퍼티와 매서드를 그대로 가져올 수 있고 거기에 추가해서 객체를 확장시킬 수 있음
// 메서드를 생성자의 프로토타입객체(상속해준 부모 객체)에 추가해두면 메모리 낭비를 피할 수 있고(각각의 객체에 두번 저장하지 않음) 
// 해당 메서드를 다른 생성자에 상속할 수 있음


// 생성자 정의 방법 4가지

// 1. 함수 선언문은 자바스크립트 엔진이 프로그램 또는 함수의 시작부분으로 끌어올려서 선언함 (Hoisting)
// 2,3,4는 hoisting되지 않기때문에 호출하기 전에 무조건 선언되어야 함

// 1. 함수 선언문
// function Card(suit, rank) {
//     this.suit = suit;
//     this.rank = rank;
// }
// Card.prototype.show = function(){
//     console.log(this.suit + this.rank)
// }

// 생성자 내의 this는 생성된 인스턴스를 참조함


// // 2. 함수 리터럴
// var Card = function(suit, rank) {
//     this.suit = suit;
//     this.rank = rank;
// }
// Card.prototype.show = function(){
//     console.log(this.suit + this.rank)
// }

// // 3. 클래스 선언문
// class Card {
//     constructor (suit, rank){
//         this.suit = suit;
//         this.rank = rank;
//     }
//     show(){
//         console.log(this.suit + this.rank)
//     }
// }

// // 4. 클래스 표현식
// var Card = class {
//     constructor (suit, rank){
//         this.suit = suit;
//         this.rank = rank;
//     }
//     show(){
//         console.log(this.suit + this.rank)
//     }
// }


// 접근자란 객체가 가진 프로퍼티 값을 객체 밖에서 읽거나 쓸 수 있도록 제공하는 메서드
// 객체 프로퍼티를 객체 밖에서 조작하는 것은 데이터의 유지보수에 좋지 않음
// 따라서 getter함수 (읽을때) setter함수 (쓸때)를 정의하여 데이터를 읽을때 값을 가공해서 내보낼수도 있고 쓰는 것을 제한하거나 데이터를 가공해서 쓸 수 있게끔 함

// 접근자 프로퍼티를 가진 객체를 생성하는 생성자를 정의하는 방법 (객체 생성이 아님)

// name 접근자 프로퍼티를 가진 객체를 생성하는 생성자 정의하기
function Person(name) {
    Object.defineProperty(this, "name", { //object.defineProperties : 게터와 세터를 정의할 수 있음 | 여기서의 name은 접근자 프로퍼티
        get: function() {
            return name;
        },
        set: function(newName) {
            // name = newName;
            name = newName.charAt(0).toUpperCase() + newName.substring(1);
        },
        enumerable: true,
        configurable: true
    });
}

Person.prototype.sayName = function() {
    console.log(this)
    console.log(this.name);
};

var person = new Person("Tom"); //인수 name : Tom
console.log(person,"|" ,person.name) //Person { name: [Getter/Setter] } | Tom
person.sayName(); 
//Person { name: [Getter/Setter] }
//Tom
console.log(person.name); //get : Tom
person.name = "huck"; //set : Huck
console.log(person.name); //get : Huck
person.sayName(); 
//Person { name: [Getter/Setter] }
//Huck