//7-4먼저

function fact(n) {
    var k = 1, i = 1;
    while( i < n ) {
        console.log("i = " + i + ", k = " + k ); //반복문 사용할땐 콘솔찍어서 값 변화 확인해보는것이 좋음!
        k *= (++i);

    }
    console.log("i = " + i + ", k = " + k );
    return k;
}

fact(5);
