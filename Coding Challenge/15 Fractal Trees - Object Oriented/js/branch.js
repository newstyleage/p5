class Branch{
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.finished = false;
    }
    jitter() {
        this.end.x +=random(-1, 1);
        this.end.y +=random(-1, 1);
        };

        
    show() {
        stroke(255);
        line(this.start.x, this.start.y, this.end.x, this.end.y)
    }
    branchA() {
        let dir = p5.Vector.sub(this.end, this.start);
        dir.rotate(PI/4);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        let a = new Branch(this.end, newEnd);
        return a;
    }
    branchB() {
        let dir = p5.Vector.sub(this.end, this.start);
        dir.rotate(-PI/4);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;
    }
}