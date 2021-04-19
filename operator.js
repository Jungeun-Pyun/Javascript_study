// a + b
// a,b : 피연산자
// + : 연산자

// 연산자 우선순위

// console.log(2 + 3 * 4) //곱셈먼저
// console.log((2+3)*4)

// console.log(24/6*2) //우선순위 일치하는 경우 왼쪽에서 오른쪽으로


//-----------------------------------------------------5.2 산술연산

// 산술연산자 : 피연산자가 숫자인 연산자
// + - * /
// % : 나머지

console.log(7/2)
console.log(5%1.5)

console.log(1 + "2month") //문자열로 자동 변환

console.log(0/0)
console.log(true+true)

//++a
//a++

a=1
b = ++a
console.log("a:",a)
console.log("b:",b)

c=a++ + 2 //a+2를 c에 먼저 대입 후에 a값 변경
console.log("c:",c)

A = 1
B = 2
C = 3

A += B // A = A + B
console.log("A :", A)
C -= B // C = C - B
console.log("C:", C)


//내장 객체 Math

console.log(Math.PI)

X = -2
console.log(Math.abs(X))

Y = 22.2
console.log(Math.round(Y))


//부동 소수점 
//자바스크립트 숫자는 64비트 부동 소수점
// 부호 1비트, 소수점(지수) 11비트, 숫자 부분 52비트

var a = 0.1
var b = 0.2
var c = a + b

console.log(c)

//식에 무한소수가 존재할 때 자바스크립트에서 사용하는 자릿수의 한계가 존재함으로써 오는 정밀도 손실이 있음
//여러가지 방식으로 우회해서 값을 구할 수는 있다!
// console.log(Math.round((a + b) * 10) / 10);

//-----------------------------------------------------5.3 문자열 제어

console.log("Hello " + "World")
console.log("1"+"2")

var a = 3
console.log("a 값은 "+ a +" 입니다")


//문자열을 객체로 변환
//String 내장 생성자

var msgObj = new String("Everything is practice.")
console.log(msgObj)
console.log(msgObj.length)
console.log(msgObj.charAt(3)) //0부터 시작

//-----------------------------------------------------5.4 논리 연산자와 관계 연산자

//관계 연산자
// ==
// !=
// ===
// !==
// <
// >
// <=
// >=

console.log(null == undefined) //값이 같으면 true
console.log(null === undefined) //타입까지 같아야 true

console.log(1 == "1")
console.log(1 === "1")

console.log([2] == 2)
console.log([2] === 2)


//논리 연산자
// &&
// ||
// !

var x = 1
var y = 2
var a = x<0 && y>0
var b =  x>0 || y>0
console.log("모두 참일 때만 true : ",a)
console.log("둘 중 하나만 참이어도 true : ", b)
console.log("a 또는 b 거짓", !(a&&b))
console.log("a 그리고 b 거짓", !(a||b))

// //단락평가
// //첫 번째 피연산자 값이 표현식을 결정하면 두 번째 피연산자를 평가하지 않음

var p = null
console.log(p && p.name) //false면 첫 번째 값 반환

p = {name: "Tom", age : 18}
console.log(p && p.name) //true면 두 번째 값 반환

console.log(p || p.name) //첫 번째 값이 true면 첫 번째 값 반환 (다음 값으로 넘어가지 않음)
console.log(p.test || p.name) //두 번째 true인 값 반환
console.log(p.test || p.test2 || p.name) //여러개의 값 중 null 또는 undefined가 아닌 값을 선택할 때 사용할 수 있음

//-----------------------------------------------------5.5 비트 연산
//비트 연산자는 실제로 피연산자를 부호 있는 32비트 정수로 변환해서 처리함
//첫번째 비트가 부호 비트 (0 : 0이상, 1:음수)

a = 105 //01101001
b = -91 //10100101

c=a&b
console.log(c.toString(2))

//비트 논리 연산자 : 값이 0이면 false, 1이면 true
// & 비트 논리곱 : 둘 다 1이면 1
// | 비트 논리합 : 둘 중에 1이 하나라도 있으면 1
// ^ 비트 배타적 논리합 : 두개의 입력이 같으면 0 다르면 1
// ~ 비트 논리 부정 : 1이면 0, 0이면 1

// << 비트 왼쪽 shift
// >> 부호 있는 오른쪽 shift
// >>> 부호 없는 오른쪽 shift
// shift 후 빈자리는 0으로 채워짐

console.log(a.toString(2))
d=a<<3
console.log(d)
console.log(d.toString(2))

// //-----------------------------------------------------5.6 기타 연산


//typeof 
var a=1
var b="string"
var c= {x:"1"}
var d = function(y) {return ++y}

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))

//조건 연산자

var a = 10

// if(a%2 == 0) {
//     parity = "짝수"
// } else {
//     parity = "홀수"
// }

var parity = (a%2 == 0) ? "짝수" : "홀수"

console.log(parity)


//문자열 변환

console.log(typeof(String(26)))

console.log(parseInt("3.14"))
console.log(parseInt("101",2)) //값을 2진수로 해석해서 10진수로 변환


//논리값 변환
// console.log(Boo)
Boo = "test"
console.log(!!Boo)
console.log(Boolean(Boo))





