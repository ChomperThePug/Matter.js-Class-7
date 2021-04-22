class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if (pointA.x <= 200) {
                stroke(79, 60, 4);
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y - 50);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y - 50);
                image(this.image3, pointA.x - 30, pointA.y - 10, 10, 20);
            }else{
                stroke(79, 60, 4);
                strokeWeight(7);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y - 50);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y - 50);
                image(this.image3, pointA.x + 20, pointA.y - 10, 10, 20);
            }
            pop();
        }
        image(this.image1, 200, 20);
        image(this.image2, 170, 20);
        //image(this.image3, 200, 20);
    }
    
}