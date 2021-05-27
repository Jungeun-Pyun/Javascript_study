//1-2.switch문
//if/else문보다 많은 분기를 간결하게 표현할 수 있다.

//switch문 기본 구성
//switch(표현식) {
//       case 표현식1 : 실행문1
//       case 표현식2 : 실행문2
//       ...
//       case 표현식n : 실행문n
//       default: 실행문n+1
// }

//case 뒤에 여러 표현식 사용 가능하지만 깔끔한 코드 구성을 위해 일반적으로 숫자 또는 문자열 사용
//break문 걸어주지 않으면 다음 동작 모두 수행함
// switch(n){
//       case 1:
//             console.log("One");
//             break;
//       case 2:
//             console.log("Two");
//             break;
//       case 3:
//             console.log("Three");
//             break;
//       default: //위치 상관 없음
//             console.log("Other");
// }

//함수내에서 switch문 사용할땐 return으로 종료가능
function binaryOperation(a, b, operator) {
	switch(operator) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return a / b;
      case "%": return a % b;
      case "^": return Math.pow(a, b);
      default: return NaN;
	}
}
console.log(binaryOperation(2,3,"+"));
console.log(binaryOperation(2,3,"-"));
console.log(binaryOperation(2,3,"*"));
console.log(binaryOperation(2,3,"^"));
console.log(binaryOperation(2,3,"A"));
