//제어구문
//자바스크립트에서 문장은 위에서부터 아래로 순차적으로 실행
//제어구문을  사용하면 순차적 실행 흐름을 변화시킬 수 있음

//제어구문의 종류
//조건문 : if/else, switch, try/catch/finally => 조건에 따라 분기처리
//반복문 : while, do/while, for, for/in, for/of => 조건 만족시 반복
//점프문 : break, continue, return, throw => 실행 위치 이동

//1. 조건문
//1-1. if/else

//기본 구성
//if (조건식) 문장 //{} : 문장이 여러줄일 경우 사용
//if (조건식) 문장1 else 문장2

var name = "d"
if (!name) { //name이 null, undefined, false..
	name=""
	message = "이름을 입력하세요"
} else message="이름은 " + name + " 입니다"
console.log(message)


//else if
var num = 1
if(num == 1){
	console.log("One")
} else { //중괄호 생략 가능
	if(num == 2){
		console.log("Two")
	} else {
		console.log("Other")
	}
}

if(num == 1){
	console.log("One")
} else if(num == 2){
	console.log("Two")
} else {
	console.log("Other")
}