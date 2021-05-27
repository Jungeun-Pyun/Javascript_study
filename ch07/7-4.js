//2. 반복문
//2-1. while문
//조건에 맞으면 동일한 동작 반복

//while문 기본 구성
//while (조건식) 동작

//조건식 : true/false 판단

function fact(n) {
	var k = 1, i = 1;
	while( i < n ) {
		k *= (++i);
	}
	return k;
}
console.log(fact(5)) // -> 120
