// 12. 정규표현식
// 정규표현식이란?
// 문자열의 패턴을 표현하기위한 도구. 정규표현식을 이용하면 특정 패턴을 가지는 문자열을 검색, 추출, 치환하는등의 처리를 구현하기 용이하다.

// 표현방법
// 1. RegExp 생성자
// 2. 정규 표현식 리터럴

//abc라는 문자열을 포함하는 문자열
//abc : 정규표현식 패턴
//정규표현식 패턴을 작성할때는 숫자(0-9), 알파벳(a-z, A-Z), +, . * 등을 사용함
//특수문자를 사용할때는 앞에 역슬래시를 붙인다 \+, \.
var reg = new RegExp("abc");
var reg = /abc/; //리터럴로 표현할때는 패턴을 //로 묶어준다



//메소드 2가지
//test : 정규 표현식 패턴을 문자열이 포함하는지 논리값 반환
var reg = /cat/;
console.log(reg.test("cats and dogs")); //true
console.log(reg.test("Cat")); //false (대문자 인식)

//exec : 정규 표현식과 일치하는 문자열을 검색하여 일치한 문자열을 배열로 반환, 못찾으면 null 반환
var reg = /Script/;
var result = reg.exec("JavaScript");
console.log(result[0]);

//index, input : 반환된 배열의 프로퍼티 
console.log(result.index); //index : 가장 처음 일치한 위치
console.log(result.input); //일치한 문자열
console.log(result);




//문자클래스 [...]
//특정 문자 집합 안의 모든 단일 문자와 일치

// var reg = [abc]; //a, b, c 중 하나와 일치
// var reg = [0123456789]; //어떤한 숫자든 하나와 일치

console.log(/[0123456789]/.test("1 littile indians")); //true

// var reg = [a-z]; //모든 소문자 중 하나
// var reg = [abcdx-z]; //a,b,c,d,x,y,z 중 하나
// var reg = [a-zA-Z0-9]; //모든 알파벳과 숫자 중 하나

//한글
// [가 - 하] : 불가
//유니코드 변환해서 사용해야함
// [\u3131-\u314E] // 역슬래시 사용하여 이스케이프 시켜줘야 유니코드로 인식함
console.log(/[\u3131-\u314E]/.test("ㄱ")); //true
console.log(/[u3131-u314E]/.test("ㄱ")); //false

// //<h1> - <h6>
console.log(/<h[1-6]>/.test("<h1>")); //true
console.log(/<h[1-6]>/.exec("<h1>")); //<h1>

// //앞뒤가 모두 일반 문자일때만 '-'가 범위를 표현할 수 있음
// //그렇지 않을때는 '-' 문자 그 자체
console.log(/[-ab]/.test("-")); //true

//부정 문자 클래스 : [^...]
//여집합의 문자 한개와 일치
console.log(/[^0-9]/.test("137")); //false

//임의의 문자
//마침표는 임의의 문자 하나와 일치
console.log("1",/c.t/.test("cat")); //true
console.log("1",/c.t/.test("consot")); //false
console.log("1",/c..l/.test("cool")); //true
console.log("1",/c..l/.test("cooool")); //false

//숫자와 숫자 외 문자
// \d : 숫자 하나
// \D : 숫자 외 문자 하나

var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("it's 2021-08-04 01:01")); //true
console.log(dateTime.test("it's 2021-Aug-04 01:01")); //false

//문자와 문자 외 문자
// \w : 알파벳, 숫자, _
// \W : 알파벳, 숫자, _ 외 하나
console.log(/\w/.test("word")); //true
console.log(/\w/.exec("aws")); //word
console.log(/\w/.exec("123_@")); //true

//공백문자와 공백 문자 외 문자
// \s : 공백 하나
// \S : 공백 외 하나
console.log(/\s\w\w/.exec("JavaScript RegExp"));
console.log(/\s\w\w/.exec("JavaScriptRegExp"));

//반복
//{m,n} : 최소 m번, 최대 n번 반복
// /[a-z]{6,12}/ : 알파벳 소문자가 6개이상 12개 이하

//{n,} : 바로 앞의 요소를 최소 n번 반복
// /[a-z]{6,}/ : 알파벳 소문자가 6개 이상

//{n} : 바로 앞의 요소를 n번 반복
// /[a-z]{4}\d{3}/ : 알파벳 소문자 4개, 그 뒤에 숫자 3개

var dateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime.test("it's 2021-08-04 01:01")); //true
console.log(dateTime.test("it's 2021-Aug-04 01:01")); //false

// ? : 최소 0번 최대 한 번 반복 == {0,1}
// /[a-z]{4}\d?/

// + : 최소 한 번 이상 반복 == {1,}
// /\s+Tom\s+/

// * : 최소 0번 이상 반복 == {0,}
// /[a-z]{4}\d*/

//임의의 문자 반복할 때 최대 횟수로 반복하여 일치하는 결과를 반환함
console.log(/Java.*/.exec("I love JavaScript"));

//최소 횟수로 반복하려면 마지막에 ? 
console.log(/Java.*?/.exec("I love JavaScript"));





//그룹화
// ()로 패턴 그룹화

var bark = /bow+(woo+f)+/;
console.log(bark.test("bowwoofwoofwooofwoooof"));
console.log(bark.exec("bowwoofwoofwooofwoooof"));
// 첫번째 + : w 반복
// 두번째 + : o 반복
// 세번째 + : () 반복

var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.exec("<h1>JavaScript</h1>"));



//앵커문자
//문자열의 위치를 패턴으로 지정
// ^ : 문자열의 시작 위치에 패턴 고정

var jsFirst = /^JavaScript/;
console.log(jsFirst.test("JavaScript is powerful")); //true
console.log(jsFirst.test("I love JavaScript")); //false

// $ : 문자열의 마지막 위치에 패턴 고정
var jsLast = /JavaScript$/;
console.log(jsLast.test("JavaScript is powerful")); //false
console.log(jsLast.test("I love JavaScript")); //true




//\b : 영어 단어의 경계
//\B : 영어 단어 경계 외
var scat = /\scat\s/;
var bcat = /\bcat\b/;
console.log("tttttttttttttttttttttttttttttttttt"); //false

console.log(scat.test("my cat")); //false
console.log(scat.test("my cat ")); //true
console.log(bcat.test("my cat")); //true

//전방 탐색 : (?=pattern)
// x(?=y) //x다음에 y가 나오는 패턴
console.log(/Java(?=Script)/.exec("I like JavaScript")); //true
console.log(/Java(?=Script)/.exec("I like JavaChip")); //false

//전방 부정 탐색 : (?!pattern)
// x(?!y) //x다음에 y가 나오지 않는 패턴
console.log(/Java(?!Script)/.exec("I like JavaScript")); //false
console.log(/Java(?!Script)/.exec("I like JavaChip")); //true

//선택패턴
// | : or 연결
var animal = /apple|peach|orange/;
console.log(animal.test("2 apples")); //true
console.log(animal.test("peach")); //true

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
console.log(countFruits.exec("10 apples")) // 정규표현식 + 부분정규표현식(...)도 exec에 함께 나옴


//플래그
//i : 대소문자 구분 하지 않음
//g : 전역 검색
//m : 여러줄 모드 검색
//y : 시작 위치 고정 검색
//u : 정규 표현식 패턴을 내부적으로 유니코드 코드 포인트 열로 처리

//설정방법
// var reg = new ResgExp("abc", "g") //생성자 두 번째 인수
// var reg = /abc/g; //리터럴 /뒤에 붙여줌
// var reg = /abc/gi; //플래그 여러개 동시에 설정 가능

// i 플래그 (대소문자 구분 안함)
console.log(/\bcat\b/i.test("I like Cat")); //true
console.log(/\bcat\b/i.test("I like CAT")); //true

// m 플래그 (여러줄 모드)
// 앵커문자는 각 줄의 시작과 끝 위치를 지정
var reg = /^cat/im; 
console.log(reg.test("Dog\nCat\nMonkey")); //true
var reg = /at$/im; 
console.log(reg.test("Dog\nCat\nMonkey")); //true






//매칭 매커니즘

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
console.log(countFruits.exec("there are 10 apples"))

// 1. 문자열 읽기 시작, \b(영어 단어 경계) 확인
// 2. 영어 단어 경계를 뜯하는 공백 문자 확인, 하지만 다음이 숫자가 아님, 계속 읽어나감
// 3. 다음이 숫자가 나오는 공백 찾음
// 4. 숫자 다음 공백 " "확인
// 5. 선택패턴 확인
// 6. s 1개 또는 문자 없음 확인
// 7. 단어 경계 확인 및 문자열 끝남



//문자열 메서드
//search
//인수로 받은 정규 표현식 객체와 일치한 최초 문자열의 첫 번째 문자 위치 반환
//일치하는 문자열 찾지 못했을 때 -1반환

var s = "1 little, 2 little indian";
console.log(s.search(/little/))
console.log(s.search(/\d/))
console.log(s.search(/\bindian/))
console.log(s.search(/3\s/))

var reg = new RegExp("\\bindian") //생성자로 정규표현식을 만들때 이스케이프 문자를 사용하려면 \ 자체를 이스케이프 해주기 위해 \\ 두번 사용해주어야 함
console.log(s.search(reg))




//replace
//첫번째 인수와 일치하는 문자열 검색해서 두번째 인수로 치환 후 새로운 문자열 반환
var s = "1 little, 2 little indian";
console.log(s.replace(/indian/,"boy"))
console.log(s.replace(/little/,"big")) //g 플래그 없으면 가장 처음 일치한 문자열만 치환
console.log(s.replace(/little/g,"big"))

//치환패턴
//$n, $&
//$n : 정규 표현식 안에 소괄호를 사용해서 그룹화한 n번째 부분 정규 표현식과 일치한 문자열이 들어감
//n : 0 - 9999
//전화번호 치환 예시
var person = "Tom, tom@example.com, 010-1234-1234"
console.log(person.replace(/0(\d{1,4}-\d{1,4}-\d{1,4})/g,"+82-$1"))

//날짜 서식 치환
var date = "오늘은 2021년8월4일 입니다."
console.log(date.replace(/(\d+)년(\d+)월(\d+)일/,"$1/$2/$3"))

//이름 성 치환
var name = "Tom Sawyer"
console.log(name.replace(/(\w+)\s(\w+)/,"$2 $1"))

//$& : 일치한 부분의 문자열
var address = "121-852 서울특별시"
console.log(address.replace(/(\d{3}-\d{3})/,"(우)$&"))

//문자열 치환
//예제 12-1 (포인트 : replace의 두번째 인수에 함수도 넣을 수 있다)

//split
//첫 번째 인수로 문자열을 분할한 후 배열에 담아서 반환
//IP 주소 분할
console.log("172.20.212.65".split("."));

//첫번쨰 인수로 정규표현식도 올 수 있음
var names = " Sangmin ; Gyuri ; Jungeun ";
console.log(names.replace(/(^\s*|\s$)/g,"").split(/\s*;\s*/)) //공백문자 치환으로 없앤 후, 분할

//두번째 인수(optional), 문자열 개수 제한
console.log("1, 2, 3, 4, 5".split(/\s*,\s*/,3))



//RegExp 객체
//lastIndex 프로퍼티
//g 플래그 설정한 정규 표현식으로 exec or text 메서드를 실행하면 일치한 문자열 바로 다음 위치가 정규표현식 객체의 lastIndex 프로퍼티에 저장됨
console.log("--------------------------------------");

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = "Tom: 010-1234-1234\nHuck: 020-550-1234\nBecky: 030-5678-5678";
console.log(tel.exec(text));
console.log(tel.lastIndex);

console.log(tel.exec(text)); //g 플래그를 설정한 정규 표현식에서 exec을 계속 호출하면 문자열을 순서대로 구할 수 있음

tel.lastIndex = 0; //lastIndex 위치는 수정 가능
while((result = tel.exec(text)) != null){
    console.log(result[0])
}


//ECMAScript6부터 추가
//u플래그
//써로게이트 문자 : UTF-16로 표현할 수 있는 범위 외 문자
// https://m.blog.naver.com/nakim02/221478419731

//u 플래그 : 써로게이트 문자 처리 가능
console.log("📖 모던 자바스크립트 입문".match(/[\s\S]/));
console.log((/[\s\S]/).exec("📖 모던 자바스크립트 입문"));
console.log("u 플래그")
console.log("📖 모던 자바스크립트 입문".match(/[\s\S]/ug));
console.log((/[\s\S]/ug).exec("📖 모던 자바스크립트 입문"));

//y 플래그
//text or exec으로 문자열을 검색할 때 문자열의 첫 문자부터 검색함
//g플래그를 이용하면 lastIndex 프로퍼티값을 지정해서 이후부터 검색할 수 있음
//y플래그를 이용하면 시작 위치 고정 검색
//y플래그 설정 여부는 sticky 프로ㅓ티로 확인 가능
//y플래그 설정한 상태에서 일치하는 문자열 발견 시 문자열 다음 위치가 lastIndex에 저장됨
//발견 못하면 lastIndex = 0
console.log("y 플래그");

var text = "1 little, 2 little, 3 little indian";
var reg = /\d+ little/y;
console.log(reg.sticky); //true
reg.lastIndex = 10;
console.log(reg.exec(text));
console.log(reg.lastIndex); //18
reg.lastIndex = 9; 

console.log("-----------------");

console.log(reg.exec(text)); //앞에 공백이 없기때문에 null
console.log(reg.lastIndex);


// //u플래그와 y플래그는 ECMAScript 6 부터 지원
// //지원 여부 확인 함수
// function hasRegExpY() {
//     try{
//         new RegExp(".","y");
//         return true;
//     } catch(e) {
//         return false;
//     }
// }
// console.log(hasRegExpY())

