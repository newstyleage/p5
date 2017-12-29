function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.vel = createVector(0, 0);
    this.update = function(){
        var newVel = createVector(mouseX-width/2, mouseY-width/2);
        newVel.setMag(3);
        this.vel.lerp(newVel, 0.2);
        this.pos.add(this.vel);
        if(this.pos.x<-width){this.pos.x = -width}
        if(this.pos.y<-height){this.pos.y = -height}
        if(this.pos.x>width){this.pos.x = width}
        if(this.pos.y>height){this.pos.y = height}
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r){
            var sum = PI * this.r * this.r + PI *other.r * other.r;
            if(this.r < 100) this.r = sqrt(sum / PI)

            return true;
        } else {
            return false;
        }
    }

    this.show = function(){

        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }

}