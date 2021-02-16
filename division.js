class divisions {
    constructor(x,y,width,hight){
        var options = {
            isStatic:true        }
            this.body = bodies.rectangle(x,y,width,hight,options)
this.width = width
this.hight = hight
world.add(world, this.body)
    }
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       FileList("white");
       rect(pos.x, pos.y, this.width, this.hight)
   } 
}