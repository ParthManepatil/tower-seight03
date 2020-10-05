class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
   // this.image = loadImage("enemy.png");
  this.visiblity=255;
  }
  score(){
    if(this.visiblity<0&&this.visiblity>-105){
score++;
    }
  }
display(){
  fill("turquoise");
  if(this.body.speed<5){
    super.display();
  }
  else{
    World.remove(world,this.body);
this.visiblity=this.visiblity-5;
  }
}
};
