# Javascript
## Authored by Jungeun Pyun

<모던 자바스크립트 입문> 서적을 기반으로 스터디한 내용을 담고있습니다. 스터디 진행에 따라 지속적으로 업데이트 예정입니다.

---

### 1장 자바스크립트의 개요

컴퓨터는 기본적으로 기계어만 이해할 수 있다. 하지만 기계어를 사람이 이해하기는 쉽지 않다. 따라서 **프로그래밍 언어**는 사람이 이해할 수 있는 언어로 프로그램을 작성하고 그 프로그램을 기계어로 번역해서 컴퓨터가 실행될 수 있도록 한다.

프로그래밍 언어엔 두 종류가 있다. **컴파일 언어**와 **인터프리터 언어**. 코드를 실행하기 이전에 기계어로 모두 번역하고 번역된 실행파일을 한 번에 CPU에 로드하는 것이 컴파일 언어이다. 대표적으로 C, C++, 자바 등이 있다.

하지만 인터프리터 언어는 프로그램을 한 줄마다 기계어로 번역해서 실행하는 프로그래밍 언어이다. 대표적으로 파이썬 루비 그리고 자바스크립트 등이 있다. 넓은 범위로 브라우저, 엔진 등 모든 것이 인터프리터라고 볼 수 있다.

컴파일 언어가 컴파일 하는데 시간은 걸리지만 실행 속도는 더 빠르다. 줄 단위로 번역 및 실행되는 인터프리터는 컴파일 언어보단 실행 속도가 느리다.

![Alt text](/images/compileVSinterpreter.png "컴파일언어 vs 인터프리터언어")

1\. 자바스크립트의 특징

-   **인터프리터 언어**이다. 프로그램을 한줄씩 기계어로 번역해서 실행하는 언어로서 기존엔 컴파일 언어와 비교하여 실행 속도가 느렸지만 최근 웹 브라우저 대부분에 실행 시간에 자바스크립트 코드를 컴파일하는 JIT 컴파일러(Just In Time Compiler)가 내장되어 실행 속도가 매우 빨라졌다.
-   **동적 프로토타입 기반 객체 지향 언어**이다. 기존의 객체를 복사하여 새로운 객체를 생성하는 프로토타입을 기반으로 프로퍼티와 메서드를 동적으로 추가 및 삭제가 가능하다.
-   **동적 타입 언어**이다. 변수의 타입이 없고 동적으로 변화한다.
-   **함수가 일급 객체**이다. 함수가 객체이며 함수에 함수를 인수로 넘길 수 있다. 자바스크립트는 객체 지향 언어지만, 함수형 언어의 특징을 가진다. 즉, 처리와 관련된 데이터와 절차를 하나로 묶어서 객체 단위로 관리를 하기도 하지만 프로그램을 함수를 조합하여 구현하기도 한다는 의미다.
-   **함수가 클로저를 정의**한다.

2\. ECMAScript

-   자바스크립트는 ECMA (Ecma International) 라는 조직에서 표준화한 코어 언어이다.
-   초창기 자바스크립트와 브라우저의 호환성이 매우 낮았으나, ECMAScript 표준화가 진행되면서 호환성 문제가 해결되었다.

---
<br></br>

### 3장 변수와 값

**변수란,** 메모리에 일정한 크기의 영역으로 생성하여 값을 담는 상자를 의미한다.

변수를 선언하지 않은 상태에서 값을 대입하면 자동으로 전역 변수 선언이 된다. 하지만 해당 방식은 코드 작성에 혼란을 줄 수 있기 때문에 추천하지 않는다.

**선언과 할당(초기화)은 다른 의미이다!** 아래의 선언자 종류를 확인할 때 유의해야 한다.

-   var : 함수 단위 스코프로 전역변수로 사용된다. (함수 내 선언 : 지역변수 / 함수 외 선언 : 전역 변수)
-   let : 선언 후 재 할당이 가능한 변수이다. (스코프 범위로 나뉘어서 사용됨) / 재할당은 가능하지만 재선언은 불가하다. (에러 발생)
-   const : 선언  후  재할당이  불가하다.선언과  동시에  초기화(할당) 해야한다!

**호이스팅(hosting) / 끌어올림**

-   스크립트 중반부에서 변수 선언을 하더라도 스크립트 첫머리에서 선언한 것처럼 된다.

데이터 타입

-   원시 타입 : Number, String, Boolean, Undefined, null, Symbol
-   객체 타입

**이때, undefined와 null은 다른 데이터 타입이다.**

-   null : 값이 비어있는 변수 (type : object)
-   undefined : 정의되어 있지 않은 값 (type : undefined)

<pre>
<code>
참고 코드
1. variable.html
2. data_type.html
</code>
</pre>

블로그링크 : <https://jungeunpyun.tistory.com/44>

---
<br></br>


### 4장 객체와 배열, 함수의 기초

**객체란** 이름과 값을 한 쌍으로 묶은 데이터를 여러 개 모은 것이다.

객체의 구조는 흔히 **이름(key)**와 **값(value)**로 이루어져 있고, 객체의 데이터 한 쌍을 객체의 **프로퍼티**라고 한다.

<img src="/images/object.png" width="40%" height="30%"></img>

객체를 생성하는 방법은 2 가지가 있다.

1.  객체 리터럴
2.  생성자 함수



1\. 객체 리터럴

> var card = {suit: “하트”,  rank: “A”}

위에서 중괄호{}로 쌓여 있는 부분이 객체 리터럴이다. 해당 코드는 객체 리터럴을 card라는 변수에 대입하였다. 키와 값은 콜론( : )으로 구분하고 프로퍼티들은 쉼표( , )로 구분한다.

-   _**객체의 프로퍼티 값으로 모든 타입이 올 수 있다. 즉, 객체의 값으로 객체와 함수 모두 사용 가능하다**_는 의미이다.
-   _**객체는 참조 타입**_이다. _객체가 생성되면 메모리의 한 영역을 차지하고, 그 객체를 변수에 대입하면 해당 객체의 메모리 위치 정보가 변수에 저장된다._

1-1. 함수

**함수란** 일련의 처리를 하나로 모아 언제든 호출할 수 있도록 만들어 둔 것이다.

함수는 입력을 받은 후에 함수 안의 프로그램에서 작업을 수행하고 수행한 결과의 값을 반환한다.

이때, _함수에게 전달되는 입력 값을 인수, 함수 정의문의 인수를 인자, 함수의 출력값을 반환값_이라고 한다.

```
function square(x) {return x*x}

//함수명 : square 
//인자(parameter) : x
//반환값 : x*x

square(5)

//인수(argument) : 3
```

-   **객체의 프로퍼티 중에서 함수를 값으로 갖고 있는 프로퍼티를 메서드라고 한다!**

함수(메서드) 활용의 장점

-   재사용 가능 : 똑같은 동작을 여러번 반복해야 할 때, 해당 동작을 함수로 만들어서 사용할 수 있다.
-   프로그램 이해도 상승 : 반복되는 동작을 하나의 함수로 작성하면 코드가 간결해지고 자연스럽게 코드를 쉽게 이해할 수 있게 된다.
-   수정 용이 : 어떤 동작을 수정해야할 때 해당 동작이 곳곳에 있는게 아니라 하나의 함수로 되어있기 때문에 하나의 함수만 수정하됨 된다.


2\. 생성자 함수

-   생성자 함수는 객체를 여러개 생성할 때 사용하는 함수이다.
-   new 연산자와 함께 사용하여 객체를 생성한다.
-   인스턴스란 생성자와 new 연산자로 생성한 객체를 의미한다.

내장 생성자 & 내장 객체

-   자바스크립트에 처음부터 포함되어 있는 생성자 및 객체가 있다.
-   모든 자바스크립트 환경에서 실행 가능하다.
-   단 내장 생성자는 객체로 만들어준 후에 사용이 가능하고 내장 객체는 바로 사용이 가능하다.
-   내장 생성자  및 객체에는 자바스크립트 내에서 유용하게 사용되는 프로퍼티와 메서드가 포함되어 있기 때문에 해당 내용을 사용하여 다양한 작업을 쉽게 처리할 수 있다.
-   내장 생성자 및 객체의 종류는 해당 페이지에서 확인 가능하다 : <developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects>


자바스크립트의 객체는 3가지로 나눌 수 있다.

<img src="/images/object2.png"></img>

-   Native 객체 : ECMAScript 사양에 정의된 javascript가 자체적으로 가지고 있는 객체를 의미한다. 즉,  내장객체와 내장생성자로 만들어진 객체들이다.
-   호스트 객체 :  실행 환경에서 제공하는 객체이다. (OS, Web browser에 따라 제공 객체 달라짐)
-   사용자 정의 객체 : 사용자가 직접 만든 객체가 사용자 정의 객체이다.


배열이란, 인덱스 값으로 이루어진 테이블을 의미한다. 배열 역시 객체의 일종이다.

배열의 인덱스는 0부터 시작하고 값은 객체와 마친가지로 모든 타입이 올 수 있다.

<img src="/images/array.png" width="40%" height="30%"></img>

<pre>
<code>
참고 코드
object.js
</code>
</pre>

블로그링크 : <https://jungeunpyun.tistory.com/45>

---
<br></br>


### 5장 표현식과 연산자

해당 내용은 이론적인 설명 보단 코드상 확인이 용이하다.

<pre>
<code>
참고 코드
operator.js
</code>
</pre>

블로그링크 : <https://jungeunpyun.tistory.com/45>

---
<br></br>

### 6장 웹 브라우저에서의 입출력

웹 브라우저에서 HTML을 이용해서 여러 방식으로 입출력을 하게 되는데 그 대표적인 예제들을 살펴보자!

#### 1\. 대화상자 & console

-   대화상자용 메서드는 3가지가 있다 : alert(경고창), prompt(입력창), confirm(확인창)
-   대화상자는 모달 창이다. 모달 창은 해당 창이 떠있는 동안 기존 창(부모 창) 조작이 불가하다.

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>대화상자</title>
	<script>
		alert("안녕하세요!")
		var name = prompt("이름을 입력하세요")
		var age = parseInt(prompt("나이를 입력하세요"))
		// prompt는 문자열만 받아옴
		var ret = confirm("링크를 표시하겠습니까?")
		console.log(`이름은 ${name} 나이는 ${age} 입니다.`)
		console.log(`이름은 %s 나이는 %i 입니다.`, name, age)

		var p={x:1, y:2}
		console.dir(p)
		//객체의 프로퍼티 나열

		console.time("elapsed_time")
		alert("확인 버튼을 누르세요")
		console.timeEnd("elapsed_time")
		// 시작시간, 종료시간으로 경과시간 구하는 메서드
		// 인수 : 타이머이름
		// 단위 : ms

	</script>
</head>
<body>
</body>
</html>
```

#### 2\. 이벤트 처리기

웹브라우저의 동작은 이벤트 주도형 프로그램을 기반으로 한다.

-   이벤트 주도형 프로그램 : 이벤트가 발생할때까지 기다렸다가 이벤트가 발생했을 때 미리 등록해둔 작업을 수행하는 프로그램
-   이벤트 : 사용자가 버튼을 클릭하는 등의 행위
-   이벤트 처리기 : 이벤트가 발생했을 때 실행되는 함수

함수를 이벤트 처리기로 등록하는 방법 3가지

1.  HTML 요소의 속성으로 등록
2.  DOM 요소의 프로퍼티로 등록
3.  addEventListener 메서드 사용

이번장에서는 1번과 2번만 알아보도록 하겠다.

**1\. HTML 요소의 속성으로 등록**

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>시각을 콘솔에 표시하기</title>
	<script>
		let input = "test"
		function displayTime() {
			var d = new Date();
			console.log(d)
			console.log("현재 시각은 " + d.toLocaleString() + " 입니다.") ;
			
		}
	</script>
</head>
<body>
	<input type="button" value="click" onclick="displayTime()">
	<!-- onclick : 이벤트 처리기 속성 p:174-->
	<!-- <input type="button" value="click" ondblclick="displayTime()"> -->
	<!-- <input type="button" value="click" onkeydown="displayTime()"> -->
	<!-- <input type="button" value="click" onkeyup="displayTime()"> -->
</body>
</html>
```

-   script 태그 안에 이벤트 처리기 함수를 작성한다.
-   HTML의 각 요소에 이벤트를 걸어둘 수 있고 해당 이벤트에 이벤트 처리기 함수를 등록한다.

**2\. DOM 요소의 프로퍼티로 등록**

DOM(Document Object Model - 문서 객체 모델)이란 웹 페이지에 대한 프로그래밍 인터페이스를 의미한다.

-   HTML : 화면에 보이고자 하는 모양과 구조를 문서로 만든 것, 단순 텍스트이다. (최초에 화면을 그릴때 사용하는 설계도)
-   DOM : HTML 문서의 내용과 구조가 객체 모델로 변화되어 다양한 프로그램에서 사용될 수 있다. (설계도를 이용하여 실제로 화면에 나타내지는 인터페이스)

HTML에서 사용되는 태그를 자바스크립트에서 이용할 수 있는 객체로 만들면 그것이 문서 객체이다.

DOM을 이용해서 이벤트 처리기를 등록하면 java script 내에서 HTML요소를 조작할 수 있다!

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>시각을 콘솔에 표시하기</title>
	<script>
		function displayTime() {
			var d = new Date();
			console.log("현재 시각은 " + d.toLocaleString() + " 입니다.") ;
		}
		// ① Window 객체의 onload 프로퍼티에 함수를 저장한다
		// 이 함수는 웹 브라우저가 문서를 모두 읽어 들인 후에 실행된다
		// HTML값을 받아와야 하는데 스크립트가 문서의 마지막에 위치해있기 때문에 
        // javascript가 동작할 때 받아올 수 없음
		// onload 메서드를 이용해서 HTML을 모두 읽어들인 후에 함수가 동작하게끔 함
		window.onload = function() {
			// ② input 요소의 객체 가져오기
			// getElementById : 인수로 id 받아옴
			var button = document.getElementById("button");
			//------------------------------
			console.log(button, typeof(button)) //object

			// ③ input 요소를 클릭했을 때 동작하는 이벤트 처리기를 등록한다
			// 동작을 javascript에서 할 수 있음
			button.onclick = displayTime;

			// ------------------------------
			// 이벤트 제거시 null 입력
			button.onclick = null
		};
	</script>
</head>
<body>
	<input type="button" value="click" id="button">
	<!-- id : "button" -->
</body>
</html>
```

-   DOM을 사용할 땐 HTML의 요소에 id를 입력한다.
-   java script에서 getElementById로 HTML 요소에 걸어둔 id를 가져올 수 있다.
-   HTML 요소에 걸어줄 이벤트를 java script 내에서 조작하고 동작하게끔 할 수 있다.
-   HTML 요소를 java script로 가져와서 사용할 때 주의해야 할 점은, HTML이 동작하는 함수를 window.onload 메서드 안에 넣어주어야 한다. 스크립트는 위에서부터 아래로 순차적으로 진행된다. 위쪽에 있는 java script가 동작할 때 아직 HTML 요소는 읽히지 않은 상태이다. 따라서 HTML 요소까지 모두 읽어 들인 후 마지막에 해당 함수를 동작하게끔 하는 것이 window.onload의 역할이다.

#### 3\. 타이머 메소드

시간에 따른 동작을 할 수 있는 메서드를 알아보자.

-   setTimeout : 일정 시간 후에 한 번만 동작하는 메서드
-   setInterval : 일정 시간마다 동작을 반복하는 메서드

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>타이머</title>
	<script>
		setTimeout(function() {
			console.log(new Date())
		}, 2000)

		var timer = setInterval(function() {
			console.log(new Date())
		}, 2000)

		clearTimeout(timer)

	</script>
</head>
<body>

</body>
</html>
```

-   메서드에 함수와, 시간 인수가 들어간다. 시간은 ms 단위이다.
-   해당 메소드 자체를 변수에 넣고 clearTimeout을 하면 초기화를 할 수 있다.

#### 4\. innerHTML

DOM을 이용하여 java script내에서 HTML 요소를 조작할 때, innerHTML 요소로 HTML 자체를 변경할 수 있다.

```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>스톱워치</title>
	<script>
		window.onload = function() {
			var startButton = document.getElementById("start");	// start 버튼 요소
			var stopButton = document.getElementById("stop");	// stop 버튼 요소
			var display = document.getElementById("display");	// 결과를 표시하는 요소
			var startTime,timer;
			startButton.onclick = start;	// strat 버튼 활성화
			function start() {
				startButton.onclick = null;	// start 시작하면 바로 start 버튼 비활성화
				stopButton.onclick = stop;	// stop 버튼 활성화
				startTime = new Date();
				// 0.01 초마다 경과한 시간을 표시
				timer = setInterval(function() {
					var now = new Date();
					// #display에 경과한 시간 쓰기
					// innerHTML을 사용하면 HTML 요소의 내용 변경 가능
					display.innerHTML = ((now - startTime)/1000).toFixed(2);
				},10);
			}
			function stop() {
				clearInterval(timer);			// 타이머 해제
				startButton.onclick = start;	// strat 버튼 활성화
			}
		};
	</script>
</head>
<body>
	<p id="display">0.00</p>
	<input id="start" type="button" value="start">
	<input id="stop" type="button" value="stop">
</body>
</html>
```

-   display.innerHTML을 이용하여 HTML의 display 요소의 값을 0.01초마다 수정한다.

#### 5\. 폼 컨트롤 요소

HTML 요소에 input을 입력할 때 value값 외에 checked 여부도 확인할 수 있다.

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>체질량지수 계산하기</title>
	<script>
        window.onload = function() {
            document.getElementById("button").onclick = function() {
                // input 요소에 입력된 몸무게 데이터와 키 데이터를 가져온다
                var h = parseFloat(document.getElementById("height").value);
                var w = parseFloat(document.getElementById("weight").value);
                // 체질량지수를 bmi라는 id를 가진 요소(output 요소)에 기록한다
                var bmi = document.getElementById("bmi");
                bmi.innerHTML = (w/h/h).toFixed(1);
            };
            //체크박스 클릭 여부 확인
            document.getElementById("checkBox").onchange = function() {
                console.log(document.getElementById("checkBox").checked)
            }
        };
	</script>
</head>
<body>
	<p>키: <input type="number" id="height"> m</p>
	<p>몸무게: <input type="number" id="weight"> kg</p>
	<p>당신의 체질량지수는 <output id="bmi">?</output> 입니다</p>
	<input type="button" id="button" value="계산">
    <p>checkBox <input type="checkbox" id="checkBox"></p>
</body>
</html>
```

-   value값은 문자열로만 받아오기 때문에, 숫자 값을 가져오는 경우엔 parseInt 또는 parseFloat를 사용해야 한다.
-   checked는 true, false로 결과를 받는다.

#### 6\. document.write

document.writea메서드는 인수로 받은 문자열을 HTML 문서의 body 요소 안에 출력한다. 이벤트 처리기 내에서 실행하면 전체 HTML 내용이 document.write 출력 값으로 바뀌고 그 뒤로 HTML 문서를 수정할 수 없다. 따라서 해당 방법은 실무적으로 추천하지 않고, 동적으로 HTML 문서 변경하려면 DOM을 사용하는 것을 추천한다.

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>document.write</title>
	<script>
        var now = new Date()
        var month = now.getMonth() + 1
        var day = now.getDate()
        document.write(`<p>오늘은 ${month}월 ${day}일 입니다.</p>`)
	</script>
</head>
<body>
    <!-- document.write 내용이 출력됨 -->
</body>
</html>
```
<pre>
<code>
참고 코드
ch06 폴더
</code>
</pre>

블로그링크 : <https://jungeunpyun.tistory.com/57>


