//----------------------------------4-1

// 객체 리터럴
var card={suit : "하트", rank : "A"}
console.log(card.suit)

card.value =14
console.log(card)

delete card.rank
console.log(card)

//in 연산자로 프로퍼티 유무 확인
console.log("suit" in card)
console.log("color" in card)

//객체의 프로퍼티 값으로 객체 사용하기
var p = {x: 1.0, y:2.5}

var circle = {
    center : p,
    radius : 2.5
}

console.log("circle.center : ", circle.center)
console.log("type : ", typeof(circle.center))

// //참조 타입

var a = card //a가 객체 card의 메모리 위치 정보를 참조하게 됨
console.log("a.suit : ", a.suit)



//----------------------------------4-2

// 함수 정의하기

function square(x) {return x*x}

//함수명 : square 
//인자(parameter) : x
//반환값 : x*x

// //함수 실행하기

square(5)

//인수(argument) : 3

console.log(square(5))

//함수의 인수

function dist(p,q) {
    var dx = q.x - p.x
    var dy = q.y - p.y
    return Math.sqrt(dx*dx+dy*dy)
}

var p1={x:1, y:1}
var p2={x:4, y:5}
var d=dist(p1,p2)

console.log("distance : ",d)

var bark = function() {console.log("Bow-wow")} //인수가 없는 함수
bark()

// console.log("type of bark : ", typeof(bark))

// //함수 참조

var b = bark
b()

// //인수가 여러개일때 객체로 전달 가능

function setBallProperties(x,y,vx,vy,radius) {
    console.log(x,y,vx,vy,radius)
}

setBallProperties(1,2,3,"Test","parameters")


var parameters = {
    x: 0,
    y: 0,
    vx: 10,
    vy: 15,
    radius: 5
}


function setBallProperties2(params) {
    console.log(params.x, params.y, params.vx)
}

setBallProperties2(parameters)

//메서드

var circle = {
    center : {x:1.0, y:2.0},
    radius: 2.5,
    area: function () {
        return Math.PI * this.radius * this.radius
    }
}

//this : 함수를 메서드로 가지고 있는 객체
console.log(circle.area())

//메서드 또한 프로퍼티의 일종이므로 추후 추가 가능
circle.translate = function(a,b){
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
}

circle.translate(1,2)
console.log(circle.center)



//----------------------------------4-3

//생성자로 객체 생성
// Card 생성자 (생성자 함수 이름은 관례적으로 첫 글자를 대문자로 작성)
// this : 생성자가 생성하는 객체
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

//Card 생성자로 객체를 생성할 때 new 연산자 사용
var card = new Card("하트", "A") 

//card : 인스턴스
console.log(card) 

//인스턴스 여러개 생성하기
var card2 = new Card("클럽", "K")
var card3 = new Card("스페이드", "2")

//생성자 내부에서 초기화 작업하기
function Particle(x,y,vx,vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx * vx + vy * vy)
}

var p = new Particle(0,0,3,4)
console.log(p) //velocity 값 까지 함께 출력됨

//객체의 프로퍼티 값으로 함수가 올 수 있음(메서드)
//생성자에도 프로퍼티 값으로 함수 입력 가능

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function() {
        return Math.PI * this.radius * this.radius; //함수 내부 this : 인스턴스의 프로퍼티
    }
}

var ct = {x:0, y:0}
var c = new Circle(ct,2)
console.log("넓이 : ", c.area()) //함수실행


//----------------------------------4-4 내장 생성자

//Date 생성자

var now = new Date()
console.log(now)

var then = new Date(2021, 3, 3) //월은 0부터 시작 0-11
console.log(then)

//Date 계산식에서 ms 단위로 계산 가능

var elapsed = now - then
console.log(elapsed)


var start = new Date()
console.log("start time : ", start)

//프로그램 실행

var end = new Date()
console.log("end time : ", end)

var elapsed2 = end - start

console.log("elapsed time : ", elapsed2)

//Date 객체 주요 메소드
console.log("get year : ", now.getFullYear())
console.log("get month : ", now.getMonth())
console.log("get date : ", now.getDate())
console.log("get day : ", now.getDay()) //요일 : 일요일 0부터 시작

//Function 생성자

var square_test = new Function("x", "return x*x")
// 첫번째 - n번째 인자 : 인수의 이름
// 마지막 인자 : 함수 내용 

console.log(typeof(square_test))
console.log(square_test(3))  // 8장에서 추가 설명




//----------------------------------4-5 배열의 기초

//배열 생성하기
var evens = [2, 4, 6, 8]
console.log(evens)

var empty = []
console.log(empty)

var a = [1, , 3]
console.log(a)

var various = [3.14, "pi", true, {x:1,y:2}, [1,2,3]]
console.log(various)

//배열의 길이
//최대 인덱스 값 + 1
console.log("length : ", evens.length) 

//배열 길이 지정하기
A = [1, 2, 3, 4, 5, 6]
console.log("A length : ", A.length) 

A.length = 3
console.log("A :", A)
console.log("A fixed length : ", A.length) 

A.length = 5
console.log("A :", A)
console.log("A fixed length : ", A.length) 

//Array 생성자로 배열 생성하기 (내장생성자)
var evens2 = new Array(2,4,6,8)
var empty2 = new Array()
// var a2 = new Array(1, ,3) 
var various2 = new Array(3.14, "pi", true, {x:1,y:2}, [1,2,3])

console.log(evens2)
console.log(empty2)
// console.log(a2)
console.log(various2)


//생성자 인수가 하나의 숫자일 때
var x = new Array(3)
console.log(x)
console.log("x_length : ",x.length) //해당 길이만큼 배열 생성

// //특정 요소 참조
console.log(evens2[1])

// 배열 == 객체
// 인덱스 번호 == 키
console.log(typeof(evens2))

//배열 값 추가
evens2[4] = 10
console.log("evens2 : ", evens2)

evens2.push(12)
console.log(evens2)

//값 삭제
delete evens2[3]
console.log(evens2)
console.log(evens2.length)

//특정 인덱스에 값 추가
evens2[10] = 100
console.log(evens2)
console.log(evens2.length)


