//중첩반복문

var n = 20;
for(var a = 1; a <= n; a++) {
   for(var b = 1; b <= n; b++) {
      for(var c = 1; c <= n; c++) {
         if( a*a + b*b == c*c ) {
            console.log(a + "^2 + " + b + "^2 = " + c + "^2");
         }
      }
   }
}

//2-4. for/in문
//객체안의 프로퍼티를 순회하는 반복문
//for/in문 기본 문법
//for (변수 in 객체 표현식) 문장

//객체 표현식이 null 또는 undefined로 평가되면 반복문 종료
//객체면 프로퍼티 이름이 차례로 변수에 할당되고 각 프로퍼티에 대해서 문장 한번씩 실행

var obj = {a:1, b:2, c:3}
for(var p in obj){
   console.log("p = " + p) //키를 가져옴
}

var obj = {a:1, b:2, c:3}
for(var p in obj){
   console.log(`obj.${p}=${obj[p]}`) //값을 가져오기 위해선 괄호 연산자 사용
}
