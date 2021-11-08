// prototype이 아닌 클래스 생성자에 메서드를 추가할수도 있음
// 이것을 정적 메서드라고 하고 앞에 static을 붙여줌

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


