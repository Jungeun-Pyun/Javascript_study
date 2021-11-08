// 서브 타입 생성자는 슈퍼 타입 생성자의 메서드를 덮어쓸 수 있음
// super 키워드 사용

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
