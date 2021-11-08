// 접근자 프로퍼티 생성을 클래스로 해보기

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