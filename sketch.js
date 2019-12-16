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
  text('마우스를 꾹 누르세요, 떼면 시간이 멈춥니다',400,400)



  if (frameCount % 60 == 0 && time >= 0 && mouseIsPressed) {
    time ++;
  }
 if(time>5 && time<10){
 text('해양쓰레기',100,100)
 }
  if(time>10 && time<20){
  text('멸치',100,100)
  }
  if(time>20&& time<30){
  text('고등어',100,100)
  }
  if(time>30 && time<40){
  text('갈치',100,100)
  }
  if(time>40 && time<50){
  text('광어',100,100)
  }
  if(time>50 && time<60){
  text('돔',100,100)
  }
  if(time>90 && time<100){
  text('참치',100,100)
  }
  if(time>130 && time<140){
  text('상어',100,100)
  }
  if(time>170 && time<190){
  text('고래',100,100)
  }
  if(time>190){
  text('바다의 신',100,100)
  }
}
