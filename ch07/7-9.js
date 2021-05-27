//2-3. for문
//for문 기본 문법
//for (초기화식; 조건식; 반복식) 문장
// 초기화 1번 -> 조건식 평가 -> 문장 실행 -> 반복식 -> 조건식 평가

for(var i=1; i<10; i++){
	console.log(i)
}

for(var i=1, sum=0; i<10; i++){
	sum += i;
	console.log(sum)
}

// for(;   ;){ //세미콜론 생략 불가, 조건식 없으면 무한 반복
// 	if(confirm("종료하겠습니까?")) break
// }

 
function sumArray(a) {
	var sum = 0;
	for(var i=0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}
var a = [3,5,1,2,6,7];
console.log(sumArray(a)); // -> 24

// i < a.length 부분을 아래 코드로 대체해도 동일한 값이 나옴
// i <= a.length -1

