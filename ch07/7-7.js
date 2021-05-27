//2-2. do/while 문
//while문은 반복 여부를 시작에서 판단
//do/while문은 반복 여부를 마지막에 판단

//do/while문 기본 문법
//do 문장 while(조건식);
//마지막에 세미콜론!!

//문장이 무조건 한번은 실행된다. (while문과 차이)

function fact(n) {
	var k = 1, i = n;
	do {
        console.log("i = " + i + ", k = " + k );
		k *= i--;
	} while( i>0 );
	return k;
}
fact(5); // -> 120
