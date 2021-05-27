//이진 검색 알고리즘 : 정렬된 배열에서 가운데 요소의 값을 기준으로 반으로 나눈 후 어느쪽에 값이 있을지를 예측하면서 검색해 나가는 방법
//O(log_2{n})
//2^x = n

function binarySearch(x,a) {
	var n = a.length; //15
	var left = 0, right = n-1;
	while( left < right ) {
		var middle = Math.floor((left+right)/2); //7
		if( x<=a[middle] ) {
			right = middle; //7
		} else {
			left = middle+1; //8
		}
	}
	if( x == a[right] ) return right;
	return null;
}
var a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
console.log(binarySearch(35,a));  // -> 7
