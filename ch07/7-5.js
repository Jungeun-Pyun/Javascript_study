//순차검색 (배열에서 특정값 찾기)

function linearSearch(x, a) {
	var i=0;
	var n = a.length; //15
	while( i < n && x > a[i] ) i++; //오름차순
	if( x == a[i] ) return i;
	return null;
}
var a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
console.log(linearSearch(35,a)); // -> 7


//추가내용 --> 시간 남으면
//순차검색의 계산 시간 : O(n)
//빅오 표기법 (란다우 표기법) : 알고리즘의 효율성을 평가하기 위한 분석법
//데이터가 주어졌을 때 연산의 횟수를 측정한다.
//이때 알고리즘의 최악의 경우로 복잡도를 측정한다. 데이터의 개수 (n -> 무한대)

function bigoexample(n){
	for(var i=0; i<n; i++){
	console.log(i)
	}
}
//O(n)

function bigoexample(n){
	for(var i=0; i<n; i++){
	console.log(i)
	for(var j=0; j<n; j++){
	console.log(j)
	}}
}
//O(n^2)

function bigoexample(n){
	for(var i=0; i<n; i++){
	console.log(i)
	for(var j=0; j<n; j++){
	console.log(j)
	for(var j=0; j<n; j++){
	console.log(j)
	}}}
}
//O(n^3)

//계수 법칙
function bigoexample(n){
	var count = 0;
	for(var i=0; i<n; i++){
		count += 1
	}
	for(var i=0; i<5*n; i++){
		count += 1
	}
	return count;
}
//n + 5n = O(6n)
//O(6n) == O(n) : n이 무한대로 가면서 계수는 무시된다

function bigoexample(n){
	var count = 0;
	for(var i=0; i<n; i++){
		count += 1
	for(var j=0; j<5*n; j++){
		count += 1
	}}
	return count;
}
//5n * n = O(5n^2)
//O(5n^2) == O(n^2) : n이 무한대로 가면서 계수는 무시된다