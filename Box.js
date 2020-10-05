class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   // this.image = loadImage("wood1.png");
   this.visiblity=255;
  }
  score(){
    if(this.visiblity<0&&this.visiblity>-105){
score++;
    }
  }
display(){
  fill("pink");
  if(this.body.speed<5){
    super.display();
  }
  else{
    World.remove(world,this.body);
this.visiblity=this.visiblity-5;
  }

}
};
