let time =0;

function setup()
{
  createCanvas(500,500);
}

function draw()
{
  background(255);
  textAlign(CENTER);
  textSize(50);
  text(time,width/2,height/2);



  if (frameCount % 60 == 0 && time >= 0 && mouseIsPressed) {
    time ++;
  }
 if(time>10 && time<20){
 text('멸치',100,100)
 }
}
