class particle {
    constructor(x,y,r){
        var option = {
           restitution:0.4
        }
        this.r = r

    this.body = Bodies.circle(x,y,radius,option)
    this.color = color(random(0,225), random(0,225), random(0,225))
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.positionvar 
        angle = this.body.angle
        
        Push()
        Translate(pos.x, pos.y)
        rotate(angle)

        noStroke()
        fill(this.color)
        ellipseMode(RADIUS)
        elipseMode(0,0, this.r, this.r)
        pop()
    }
}