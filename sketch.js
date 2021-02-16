var particles = []
var plinkos = []
var divisions = []
var divisionHight = 300;
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  for(var k = 0; k <=innerWidth; k = k +80){
    divisions.push( new divisions(k, height-divisionHight/2, 10, divisionHight));
}
for (var j = 40; j <=Width; j=j+50)
{
  plinkos.push(new plinko(j,75))
}
for (var j = 15; j <=Width-10; j=j+50)
{
  plinkos.push(new plinko(j,175))
  if(frameCount%60===0){
    particle.push(new particals(random(width/2-10, width/2+10), 10,10))
  }
}
for (var j = 0; j < particles.length; j++){
  partiles[j]. display();
}
for ( var k = 0; k < divisionHight.length; k++){
divisio[k].display()
}
Ground = new ground (240,800,480,10)
}
function draw() {
  background(255,255,255);  
  drawSprites();
  Ground.display()
  }
