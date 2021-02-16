class Plinco {
        constructor(x,y,radius){
            var option = {
               isStatik:true
            }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        World.add(world,this.body)
        }
        display(){
            ellipseMode(RADIUS)
            fill("gray")
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        }
    }