// 상속으로 클래스 확장
// extends 키워드를 붙여주면 다른 생성자를 상속받을 수 있음 

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