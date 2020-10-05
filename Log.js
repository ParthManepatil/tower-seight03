class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    //this.image = loadImage("wood2.png");
    this.visiblity=255;
    Matter.Body.setAngle(this.body, angle);
  }
  score(){
    if(this.visiblity<0&&this.visiblity>-105){
score++;
    }
  }
  display(){
    fill("lightgreen");
    if(this.body.speed<5){
      super.display();
    }
    else{
      World.remove(world,this.body);
  this.visiblity=this.visiblity-5;
    }
  }
}