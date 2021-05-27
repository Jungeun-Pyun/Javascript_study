//점프문
//프로그램의 다른 위치로 이동하는 제어 구문
//break, continue, return, throw
//문장에 라벨을 붙이면 break문이나 continue문을 실행했을 때 점프하는 위치로 지정할 수 있다.

//라벨문(break&continue 하고만 함께 쓰일 수 있다)
//라벨 이름 : 문장
//라벨 이름으로 모든 식별자를 사용할 수 있다.

//break : switch문, 반복문 내에서만 사용 가능
//continue : 반복문 내에서만 사용 가능
// => 라벨을 사용할 수 있는것은 switch와 반복문 뿐

//break문 예제
var a=[2,4,6,8,10]
var b=[1,3,5,6,9,11]
loop: for(var i=0; i<a.length; i++) {
   for(var j=0; j<b.length; j++) {
      if(a[i] == b[j]) break loop; //라벨이 붙은 문장 끝으로 점프
   }
}
console.log(`a[${i}] = b[${j}]`)
//주로 중첩 반복문 안쪽에서 전체 반복문 종료할 때 사용



//continue문 
// while : 반복문의 처음으로 돌아가서 조건식 평가, true면 처음부터 실행
// do/while : 중간을 건너뛰고 반복문의 마지막 조건식 평가, true면 처음부터 실행
// for : 반복식 실행 후, 조건식 평가. true면 반복문 이어서 실행
// for/in : 반복문의 처음으로 되돌아감. 지정한 변수에 할당된 프로퍼티의 다음 프로퍼티부터 시작


//continue문 예제
//양수값만 더하기, continue문이 실행되면 반복문 재시작
var a = [2,5,-1,7,-3,6,9]
for(var i=0, sum=0; i<a.length; i++) {
   if(a[i]<0) continue;
   sum += a[i]
}
console.log(sum)

//모든 요소의 값이 10이하인 배열 찾아서 각 배열의 평균값 구하고, 최대 평균값 구하기
var a =[[2,4,6,8],[1,5,12,3],[7,6,8,5],[5,15,3,4],[3,2,9,4]]
var max = Number.NEGATIVE_INFINITY; //음의 무한대
mainloop: for(var i=0; i<a.length; i++) {
   var average = 0;
   for(var j=0; j<a[i].length; j++){
      if(a[i][j]>10) continue mainloop;
      average += a[i][j]
   }
   average /= a[i].length
   console.log(`i = ${i} : 평균값 = ${average}`);
   if(max < average) {max = average};
}
console.log(`최대 평균값 = ${max}`)

