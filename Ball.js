class Ball{
    constructor(x, y, radius){
        var options = {
            density: 1.0, 
            restitution: 0.2, 
            frictionAir: 0.05


        }
        this.radius = radius 
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body)
    }

display(){
    var pos = this.body.position 
    push();
    translate(pos.x, pos.y)
    ellipseMode(RADIUS)
    fill("white")
    ellipse(0, 0, this.radius, this.radius)
     pop();
}

}