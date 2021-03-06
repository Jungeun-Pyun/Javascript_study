# Javascript
## Authored by Jungeun Pyun

<모던 자바스크립트 입문> 서적을 기반으로 스터디한 내용을 담고있습니다. 스터디 진행에 따라 지속적으로 업데이트 예정입니다.

---

### 📌 1장 자바스크립트의 개요

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

### 📌 3장 변수와 값

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


### 📌 4장 객체와 배열, 함수의 기초

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


### 📌 5장 표현식과 연산자

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

### 📌 6장 웹 브라우저에서의 입출력

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

---
<br></br>

### 📌 7장 제어구문

자바스크립트에서 문장은 위에서부터 아래로 순차적으로 실행된다. 제어 구문을 사용하면 순차적 실행 흐름을 변화시킬 수 있다.

#### 제어 구문의 종류

1.  조건문 : if/else, switch, try/catch/finally => 조건에 따라 분기 처리한다.
2.  반복문 : while, do/while, for, for/in, for/of => 조건 만족 시에 반복한다.
3.  점프 문 : break, continue, return, throw => 실행 위치를 이동한다.

#### 조건문

**1\. if/else**

```java script
// if/else 기본 구조
if (조건식) 문장 //{} : 문장이 여러줄일 경우 사용
if (조건식) 문장1 else 문장2
```

```java script
var name = "d"
if (!name) { //name이 null, undefined, false..
	name=""
	message = "이름을 입력하세요"
} else message="이름은 " + name + " 입니다"
console.log(message)


//else if
var num = 1
if(num == 1){
	console.log("One")
} else { //중괄호 생략 가능
	if(num == 2){
		console.log("Two")
	} else {
		console.log("Other")
	}
}

if(num == 1){
	console.log("One")
} else if(num == 2){
	console.log("Two")
} else {
	console.log("Other")
}
```

-   동작의 하나로 되어있으면 중괄호 생략이 가능하다.
-   else의 동작으로 2중 if문이 구성되는데, 중괄호가 생략되어 else if로 사용 가능하다.

```java script
function isLeapYear(year) { 
   if( (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)) ) { //계산순서 앞에서부터
      return true;
   }
   return false;
}
console.log("1900: "+isLeapYear(1900));
console.log("2000: "+isLeapYear(2000));
console.log("2001: "+isLeapYear(2001));
console.log("2002: "+isLeapYear(2002));
console.log("2003: "+isLeapYear(2003));
console.log("2004: "+isLeapYear(2004));
```

-   윤년을 구하는 예제이다.

**2\. switch문**

if/else문보다 많은 분기를 간결하게 표현할 수 있다.

```java script
//switch문 기본 구성

switch(표현식) {
case 표현식1 : 실행문1
case 표현식2 : 실행문2
...
case 표현식n : 실행문n
default: 실행문n+1
}
```

-   case 뒤에 여러 표현식 사용 가능하지만 깔끔한 코드 구성을 위해 일반적으로 숫자 또는 문자열 사용하는 것을 추천한다.

```java script
switch(n){
  case 1:
  console.log("One");
  break;
  case 2:
  console.log("Two");
  break;
  case 3:
  console.log("Three");
  break;
  default: //위치 상관 없음
  console.log("Other");
}
```

-   switch문은 case에 따라 실행은 가능하지만 종료는 불가하다. 따라서 중간에 break를 넣어서 switch문을 종료시켜주어야 한다.
-   종료하지 않으면 다음 case를 모두 실행한다.

```java script
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

```

-   함수 내에서 switch문을 사용할 땐 return을 사용해서 함수를 종료시키는 방식으로 사용 가능하다.

#### 반복문

**1\. while문**

조건에 맞으면 동일한 동작을 반복한다.

```java script
//while문 기본 구성
while (조건식) 동작
```

```java script
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

```

-   조건식은 true/false를 반환해야 한다.
-   반복문을 사용할 땐 중간에 콘솔을 찍어서 반복문의 값을 확인해 보는 것이 좋다.

**2\. do/while문**

while문은 반복 여부를 시작에서 판단하지만, do/while문은 반복 여부를 마지막에 판단한다. 따라서 do/while문은 조건이 false임에도 무조건 한 번은 실행된다.

```java script
// do/while문 기본 문법

do 문장 while(조건식);
//마지막에 세미콜론!!
```

```java script
function fact(n) {
	var k = 1, i = n;
	do {
        console.log("i = " + i + ", k = " + k );
		k *= i--;
	} while( i>0 );
	return k;
}
fact(5); // -> 120
```

-   do/while문 뒤에는 무조건 세미콜론을 찍어주어야 한다.

**3\. for문**

```java script
//for문 기본 문법
for (초기화식; 조건식; 반복식) 문장
```

-   for문 동작 순서 : 초기화 1번 -> 조건식 평가 -> 문장 실행 -> 반복식 -> 조건식 평가

```java script
for(var i=1; i<10; i++){
	console.log(i)
}

for(var i=1, sum=0; i<10; i++){
	sum += i;
	console.log(sum)
}

for(;   ;){ //세미콜론 생략 불가, 조건식 없으면 무한 반복
	if(confirm("종료하겠습니까?")) break
}

 
function sumArray(a) {
	var sum = 0;
	for(var i=0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}
var a = [3,5,1,2,6,7];
console.log(sumArray(a)); // -> 24
```

-   for문의 세미콜론은 생략 불가한다. 조건식이 없으면 무한 반복한다.

4\. for/in문

객체 안의 프로퍼티를 순회하는 반복문이다.

```java script
//for/in문 기본 문법
for (변수 in 객체 표현식) 문장
```

```java script
var obj = {a:1, b:2, c:3}
for(var p in obj){
   console.log("p = " + p) //키를 가져옴
}

var obj = {a:1, b:2, c:3}
for(var p in obj){
   console.log(`obj.${p}=${obj[p]}`) //값을 가져오기 위해선 괄호 연산자 사용
}
```

-   객체 표현식이 null 또는 undefined로 평가되면 반복문은 종료된다.
-   객체면 프로퍼티 키가 차례로 변수에 할당되고 각 프로퍼티에 대해서 문장이 한 번씩 실행된다.
-   키를 받아오기 때문에 값을 가져오기 위해선 괄호 연산자를 사용해야 한다.

#### 점프문

프로그램의 다른 위치로 이동하는 제어 구문이다.

-   break : switch문, 반복문 내에서만 사용 가능하다.
-   continue : 반복문 내에서만 사용 가능하다.
-   라벨문 : 문장에  라벨을  붙이면  break문이나  continue문을  실행했을  때  점프하는  위치로  지정할  수  있다. break와 continue 하고만 함께 쓰일 수 있다. 즉 라벨문도 결국 switch와 반복문에서만 사용 가능하다.

**1\. break문**

```java script
//break문 예제
var a=[2,4,6,8,10]
var b=[1,3,5,6,9,11]
loop: for(var i=0; i<a.length; i++) {
   for(var j=0; j<b.length; j++) {
      if(a[i] == b[j]) break loop; //라벨이 붙은 문장 끝으로 점프
   }
}
console.log(`a[${i}] = b[${j}]`)
```

-   loop 라벨을 달아두었다.
-   두 레이어에서 같은 값을 찾으면 break문으로 해당 루프를 종료한다.
-   주로 중첩 반복문 안에서 전체 반복문을 종료할 때 사용한다.

**2\. continue문**

여러 종류의 반복문에서 다음과 같이 사용된다.

-   while : 반복문의 처음으로 돌아가서 조건식 평가, true면 처음부터 실행
-   do/while : 중간을 건너뛰고 반복문의 마지막 조건식 평가, true면 처음부터 실행
-   for : 반복식 실행 후, 조건식 평가. true면 반복문 이어서 실행
-   for/in : 반복문의 처음으로 되돌아감. 지정한 변수에 할당된 프로퍼티의 다음 프로퍼티부터 시작

```java script
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
```

-   for문 내에서 continue의 조건에 걸리면 해당 순서의 동작은 넘어가고 다음부터 다시 진행된다.

---

#### <추가내용>

**빅오 표기법**

알고리즘의 효율성을 평가하기 위한 분석법이다. 데이터가 주어졌을 때 연산의 횟수를 측정하여 복잡도를 계산한다. 

데이터의 개수 n을 무한대로 하여 알고리즘의 최악의 경우로 복잡도를 측정한다. 즉 값이 클수록 복잡도가 높다는 것을 의미한다.

-   표기 : O(n)

```java script
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
```

-   중첩 반복문의 경의 n의 제곱으로 복잡도가 계산된다.

```java script
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
```

-   n이 무한대로 증가하는 경우 계수가 곱해지는 것은 값에 변화를 주지 않고 무의미하다고 본다. 따라서 계수 생략이 가능하다.
-   즉 O(5n^2) == O(n^2)

<pre>
<code>
참고 코드
ch07 폴더
</code>
</pre>

블로그링크 : <https://jungeunpyun.tistory.com/58>

---
<br></br>

### 📌 18장 생성자와 클래스 구문

#### 생성자란

생성자란 new 연산자와 함께 사용하여 객체를 생성(초기화)하는 함수를 말합니다.

java나 c++은 클래스를 이용하여 프로퍼티를 갖는 객체를 여러 개 생성할 수 있습니다. (붕어빵 틀로 여러 개의 붕어빵을 찍어내는 것처럼)

하지만 javascript에는 클래스가 없는 대신 생성자라는 함수로 이름이 같은 메서드와 프로퍼티를 가진 객체를 여러 개 생성 가능합니다.

javascript는 프로토타입 상속에 기반을 둔 객체 지향 언어입니다.

여기서 **상속**이란 특정 객체가 다른 객체로부터 기능을 이어받는 것을 의미합니다.

상속을 사용하면 기존 객체에 정의된 프로퍼티와 매서드를 그대로 가져올 수 있고 거기에 추가해서 객체를 확장시킬 수도 있습니다.

메서드를 생성자의 프로토타입객체(상속해준 부모 객체)에 추가해두면 메모리 낭비를 피할 수 있고(각각의 객체에 두 번 저장하지 않음)

해당 메서드를 다른 생성자에도 상속할 수 있습니다.

---

#### 생성자 정의 방법

생성자의 정의 방법은 총 4가지가 있습니다. 각 방법들을 알아볼까요?

```java script
// 1. 함수 선언문
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
Card.prototype.show = function(){
    console.log(this.suit + this.rank)
}

// 2. 함수 리터럴
var Card = function(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
Card.prototype.show = function(){
    console.log(this.suit + this.rank)
}

// 3. 클래스 선언문
class Card {
    constructor (suit, rank){
        this.suit = suit;
        this.rank = rank;
    }
    show(){
        console.log(this.suit + this.rank)
    }
}

// 4. 클래스 표현식
var Card = class {
    constructor (suit, rank){
        this.suit = suit;
        this.rank = rank;
    }
    show(){
        console.log(this.suit + this.rank)
    }
}
```

-   1 함수 선언문은 자바스크립트 엔진이 프로그램 또는 함수의 시작부분으로 끌어올려서 선언합니다. (Hoisting)
-   2,3,4는 hoisting되지 않기 때문에 호출하기 전에 무조건 선언되어야 합니다.

---

이제 본격적으로 생성자를 정의하는 방법을 알아보도록 합시다. 처음으로 정의해볼 생성자는 바로 접근자 생성자입니다.

**접근자**란 객체가 가진 프로퍼티 값을 객체 밖에서 읽거나 쓸 수 있도록 제공하는 메서드입니다.

객체 프로퍼티를 객체 밖에서 조작하는 것은 데이터의 유지보수에 좋지 않기 때문에getter 함수 (읽을 때) setter함수 (쓸때)를 정의하여 데이터를 읽을때 값을 가공해서 내보낼 수도 있고 쓰는 것을 제한하거나 데이터를 가공해서 쓸 수 있게끔 합니다.

접근자 프로퍼티를 가진 객체를 생성하는 생성자를 정의하는 방법을 알아봅니다. 객체 생성이 아닌 생성자를 정의하는 것에 유의합시다!

아래 예시는 name 접근자 프로퍼티를 가진 객체를 생성하는 생성자 정의하기입니다.

```java script
function Person(name) {
    Object.defineProperty(this, "name", { 
        get: function() {
            return name;
        },
        set: function(newName) {
            // name = newName;
            name = newName.charAt(0).toUpperCase() + newName.substring(1);
        },
        enumerable: true,
        configurable: true
    });
}

Person.prototype.sayName = function() {
    console.log(this)
    console.log(this.name);
};

var person = new Person("Tom"); //인수 name : Tom
console.log(person,"|" ,person.name) //Person { name: [Getter/Setter] } | Tom
person.sayName(); 
//Person { name: [Getter/Setter] }
//Tom
console.log(person.name); //get : Tom
person.name = "huck"; //set : Huck
console.log(person.name); //get : Huck
person.sayName(); 
//Person { name: [Getter/Setter] }
//Huck
```

-   Object.defineProperties 메서드를 이용하여 게터와 세터를 정의할 수 있습니다.
-   위 예제에서는 name이라는 이름을 가진 접근자 프로퍼티를 정의했습니다.
-   new 연산자를 이용해서 person이라는 새로운 인스턴스를 생성했습니다.
-   Tom은 Person 생성자의 인수로 들어갑니다.
-   **인스턴스 person의 name 프로퍼티가 바로 접근자 프로퍼티입니다. (person.name)**
-   console.log(person.name)은 인수로 받은 Tom을 접근자 프로퍼티 게터를 이용하여 return 합니다.
-   person.name = "huck"은 접근자 프로퍼티 세터에 huck을 입력합니다. 세터의 인수인 newName으로 huck이 입력되고 해당 인수는 가공 과정을 거쳐 첫 글자가 대문자로 변경된 후 name 프로퍼티에 저장됩니다.
-   이후 다시 게터 접근자를 사용했을 때 변경된 name인 Huck이 return 됩니다.
-   **생성자 프로토타입의 메서드 sayName은 생성된 객체(this)의 name값을 출력**합니다. this.name 이 바로 접근자 프로퍼티가 되기 때문에 console.log(this.name) === console.log(person.name)으로 똑같은 결과가 출력되는 것입니다.

---

#### 생성자 상속

객체뿐 아니라 생성자도 상속이 가능합니다.

**상속하는 생성자**를 슈퍼 타입 생성자라고 하고, **상속받는 생성자**를 서브 타입 생성자라고 합니다.

생성자 상속의 예제를 봅시다.

```java script
function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}
// 타원의 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toSting를 덮어쓴다
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};


function Circle(r) {  //생성자 정의
    this.a = r;
    this.b = r;
}

Circle.prototype.test = function() {
    console.log("From circle prototype")
};

var circle = new Circle(2);
```

-   처음 Ellipse라는 생성자를 정의했습니다.
-   해당 생성자는 a, b라는 프로퍼티와 getArea, toString이라는 프로토타입 메서드를 가지고 있습니다.
-   이후 Circle이라는 새로운 생성자를 정의했습니다.
-   Circle 생성자를 이용해서 circle이라는 인스턴스를 만들었습니다.

여기서 **circle의 프로토타입은 Circle.prototype이고, Circle.prototype의 프로토타입은 Object.prototype**입니다.

이때 circle이 Ellipse 생성자를 상속받기 원하는 경우 위 프로토타입 체인에 Ellipse.prototype을 추가해주어야 합니다.

슈퍼 타입 생성자로부터 프로토타입을 상속받아서 사용할 수 있는 방법은 총 3가지가 있습니다.

1\. Circle.prototype 완전 교체

현재 Object.prototpye을 보고 있는 Circle.prototype을 Ellipse.prototype을 보고있는 Circle.prototype으로 교체해줍니다.

이때 Object.create 메서드를 사용할 수 있습니다.

```java script
function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}
// 타원의 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toSting를 덮어쓴다
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};



function Circle(r) {  //생성자 정의
    this.a = r;
    this.b = r;
}

Circle.prototype.test = function() {
    console.log("From circle prototype")
};

var circle = new Circle(2); 

Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});

//toString 재정의
Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
};

// Circle 생성자로 circle 인스턴스 다시 생성
var circle = new Circle(2);


console.log(circle.getArea());   // → 12.566370614359172
console.log(circle.toString());  // → Circle 2 2
```

-   Object.create를 이용해서 Ellipse.prototye을 프로토타입으로 가지는 새로운 Circle.prototype을 생성했습니다.
-   이때 **프로토타입과 그 프로토타입의 객체는 서로 prototype 그리고 constructor라는 관계로 묶어있어야 서로 연결 고리를 유지할 수 있습니다.** 즉, Circle의 프로타입은 Circle.prototype이고 Circle.prototype의 constructor는 Circle이 되어야 합니다.
-   Circle.prototype을 재정의해줄 때 이러한 연결고리를 만들어주기 위해 constructor도 한번 더 정의해주어야 합니다.
-   이제 프로토타입 체인은 **circle -> Circle.prototpye -> Ellipse.prototype -> Object.prototype**으로 변경되었습니다. 따라서 Ellipse.prototype이 가지고 있는 메서드를 사용할 수 있습니다.
-   이때 toString메서드를 재정의하여 덮어쓸 수도 있습니다.

2\. 생성자로 인스턴스 새로 만들기

Object.prototpye을 사용하지 않고 new 연산자로 인스턴스를 새로 만들어서 사용할 수도 있습니다.

```java script
// 2. 생성자의 prototype 상속 방법 2


function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}
// 타원의 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toSting를 덮어쓴다
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};

function Circle(r) {
    this.a = r;
    this.b = r;
}

Circle.prototype = new Ellipse(); //생성자로 인스턴스 새로 만들기
Circle.prototype.constructor = Circle; //constructor 연결

//toString 재정의
Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
};

var circle = new Circle(2);

console.log(circle.getArea());   // → 12.566370614359172
console.log(circle.toString());  // → Circle 2 2
```

-   Circle.prototype을 Ellipse 생성자로 인스턴스화 하여 정의해줍니다.
-   이때도 Circle과의 연결 고리를 유지하기 위하여 constructor를 Circle로 넣어줍니다.

3\. 슈퍼 타입 생성자의 프로퍼티 & 프로토타입 빌려오기

지금까지는 Circle안에서 프로퍼티를 새로 생성하고 Circle.prototype을 새로 정의해주었지만 Ellipse에서 바로 프로퍼티와 프로토타입을 빌려올 수 있는 방법이 있습니다. 바로 call을 사용하는 방법입니다.

```java script
//  지금까지는 toStrig 메서드를 다시 정의해서 덮어썼는데
// 새로 정의하는 대신 Ellipse.prototype 메서드를 이용하는 방법


function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}
// 타원의 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toSting를 덮어쓴다
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};

function Circle(r) {
    // Ellipse 생성자를 빌려와서 프로퍼티를 정의합니다
    Ellipse.call(this, r, r);
    // 이곳에서 새로운 프로퍼티를 작성하거나, 기존의 프로퍼티를 덮어쓸 수 있음.
}

// 슈퍼 타입의 toString 메서드를 이용해서 Circle.prototype.toString를 정의한다
// 프로토타입을 call로 불러온것처럼 메서드역시 call로 불러올 수 있음
Circle.prototype.toString = function() {
    var str = Ellipse.prototype.toString.call(this);
    return str.replace("Ellipse", "Circle");
};

Circle.prototype.getArea = function() {
    return Ellipse.prototype.getArea.call(this);
};

var circle = new Circle(2);
console.log(circle.getArea());   // → 12.566370614359172
console.log(circle.toString());  // → Circle 2 2
```

-   Ellipse.call을 이용하여 Circle에서 받을 인수가 Ellipse의 인수로 들어갈 수 있게끔 만들어 줍니다.
-   마찬가지로 toString과 getArea 메서드 역시 call을 이용해서 빌려옵니다. 이때 replace로 string 역시 변경 가능합니다.

---

#### 클래스 구문

생성자 생성 방법의 3,4번이었던 클래스를 이용한 생성 방법에 대하여 알아보도록 하겠습니다.

클래스 구문의 종류에는 **클래스 선언문**과 **클래스 표현식** 두 가지가 있습니다.

1\. 클래스 구문의 종류

```java script
// 1. 클래스 선언문
class Circle { //Circle : 생성자 함수의 이름 === 클래스 이름
    //class내에 하나의 constructor 존재, 프로퍼티 모두 정의
    constructor(center, radius) { 
        this.center = center;
        this.radius = radius;
    }
    // constructor 이후에 작성된 클래스 멤버 : *prototype*의 메서드
    area() {
        return Math.PI*this.radius*this.radius;
    }
}


// 2. 클래스 표현식
var Circle = class {
    constructor(center, radius) { 
        this.center = center;
        this.radius = radius;
    }
    area() {
        return Math.PI*this.radius*this.radius;
    }
}
```

-   클래스 선언문 내부에는 무조건 **하나의 constructor**가 필요합니다. 해당 constructor 안에는 Class의 **모든 프로퍼티**가 입력됩니다.
-   constructor 이후에 나오는 method들은 class의 프로토타입의 메서드로 들어갑니다.
-   클래스 선언문과 클래스 표현식은 함수 선언문과 함수 리터럴처럼 정의하는 부분만 약간 다르고 내부 구성은 일치합니다.

2\. 클래스 선언문과 함수 선언문의 차이

-   클래스 선언문은 hoisting 불가 (생성자 사용 전 정의되어야 함)
-   클래스 선언문은 한 번만 작성 가능 (덮어쓰기 안됨), 두 개 이상 선언되면 에러 발생
-   클래스 선언문에 정의한 생성자만 따로 호출 불가 (게터, 세터로 접근 필요)

3\. 접근자 프로퍼티 생성을 클래스로 해보기

```java script
class Person {
    // 생성자를 사용한 초기화
    constructor(name) {
        this.name = name; //person.name = "Tom"
    }
    // prototype 메서드
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
}

var person = new Person("Tom"); //세터 프로퍼티에 값 대입하면 객체는 _name이라는 새로운 프로퍼티 추가
console.log(person);  //Person { _name: 'Tom' }
console.log(person.name);  // → Tom
person.name = "Huck"; //세터 프로퍼티에 값 대입하면 객체는 _name이라는 새로운 프로퍼티 추가
console.log(person);  //Person { _name: 'Huck' }
console.log(person.name);  // → Huck
person.sayName();          // → Huck

// 여기서 get, set은 Person.prototype의 메서드
// 18-1의 get, set은 Person 자체의 메서드
```

-   Class 선언문으로 Person이란 생성자를 정의해줍니다.
-   Person 생성자의 인스턴스화와 동시에 세터 프로퍼티의 value에 "Tom"을 입력합니다. 이때 \_name이라는 새로운 프로퍼티가 추가됩니다.
-   게터 함수는 \_name 프로퍼티 값을 받아옵니다.
-   sayName()의 this.name에서 name은 프로퍼티 값이 아닌 게터 함수입니다. 따라서 게터 함수가 \_name을 출력하는 것입니다.
-   class 구문에서 게터와 세터 함수는 Person.prototype의 메서드입니다. 함수 선언문에서 게터와 세터 함수가 Person 자체의 메서드였던것과는 다르다는 것을 유의하시기 바랍니다.

4\. 클래스 생성자에 정적 메서드 추가하기

prototype이 아닌 클래스 생성자에 메서드를 추가할 수도 있습니다. 이것을 정적 메서드라고 하고 앞에 static을 붙여줌으로 정의가 가능합니다.

```java script
class Person {
    constructor(name) {
        this.name = name;
        Person.personCount++;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
    // 정적 메서드
    static count() {
        return Person.personCount;
    }
}
Person.personCount = 0;

var person1 = new Person("Tom");
console.log(person1) //Person { _name: 'Tom' }
console.log(Person) //[class Person] { personCount: 1 }
console.log(Person.count());  // → 1

var person2 = new Person("Huck");
console.log(person1) //Person { _name: 'Tom' }
console.log(person2) //Person { _name: 'Huck' }
console.log(Person) //[class Person] { personCount: 1 }
console.log(Person.count());  // → 2
```

-   Person이라는 class에 count()라는 정적 메서드를 추가했습니다. 해당 메서드는 Person 클래스에 존재하는 personCount를 return 합니다.
-   클래스의 프로퍼티가 정의될 때마다 personCount가 1씩 올라가게 했습니다.
-   person1이라는 인스턴스를 정의하면서 Tom이라는 인수를 입력하며 \_name이라는 프로퍼티가 추가되었습니다.
-   또 다른 person2라는 인스턴스를 생성하여 Huck이라는 \_name프로퍼티를 추가해주었습니다.
-   이때 \_name 프로퍼티는 각 생성된 객체 인스턴스의 프로퍼티로 들어가고 personCount는 Person 클래스 자체적으로 ++됩니다. 따라서 다른 인스턴스의 프러퍼티 값을 변경하더라도 personCount의 값은 2가 됩니다.

5\. 상속으로 클래스 확장하기

extends 키워드를 사용하여 다른 생성자를 상속받을 수 있습니다.

```java script
class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    area() {
        return Math.PI*this.radius*this.radius;
    }
    toString() {
        return "Circle "
            + "중심점 ("+ this.center.x + ","+ this.center.y
            + "), 반지름 = "+ this.radius;
    }
}

class Ball extends Circle { //Circle 클래스를 상속 받음
    move(dx, dy) { //Circle의 중심점 프로퍼티 받아옴
        this.center.x += dx; 
        this.center.y += dy;
    }
}

var ball = new Ball({x: 0, y: 0}, 2); //인스턴스 생성
console.log(ball.toString());   // → Circle 중심점 (0,0), 반지름 = 2
console.log(ball.area());       // → 12.566370614359172
ball.move(1,2);
console.log(ball.toString());   // → Circle 중심점 (1,2), 반지름 = 2

// Ball 생성자의 인스턴스가 Circle 생성자의 프로퍼티, 메서드 그리고 추가된 move까지 사용 가능
```

-   Ball 클래스는 Circle 클래스를 상속받습니다.
-   Circle 클래스의 프로퍼티를 상속받기 때문에 해당 프로퍼티 값을 사용하여 메서드를 추가할 수 있습니다.
-   즉 Ball 생성자의 인스턴스가 Circle 생성자의 프로퍼티, 메서드 그리고 추가된 move까지 모두 사용 가능합니다.

6\. 메서드 덮어쓰기

super 키워드를 사용하여 서브 타입 생성자는 슈퍼 타입 생성자의 메서드를 덮어쓸 수 있습니다.

```java script
class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    area() {
        return Math.PI*this.radius*this.radius;
    }
    toString() {
        return "Circle "
            + "중심점 ("+ this.center.x + ","+ this.center.y
            + "), 반지름 = "+ this.radius;
    }
}

class Ball extends Circle {
    move(dx, dy) {
        this.center.x += dx;
        this.center.y += dy;
    }
    toString() {
        var str = super.toString(); //toString 메서드 덮어쓰기
        return str.replace("Circle", "Ball");
    }
}

var ball = new Ball({x: 0, y: 0}, 2);
console.log(ball.toString());   // → Circle 중심점 (0,0), 반지름 = 2
```

-   상속받는 Circle 클래스의 메서드 toString을 super 키워드를 이용하여 덮어씁니다.

---

지금까지 상속자와 클래스 구문에 대하여 알아보았습니다. 관련 코드는 아래 github에 있습니다. 감사합니다 :)

<pre>
<code>
참고 코드
ch18. 생성자와 클래스 구문
</code>
</pre>

블로그링크 : <https://jungeunpyun.tistory.com/72>
