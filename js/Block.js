class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed>3){
         World.remove(world,this.body) ;
        }
        push();
        rotate(angle);
        rectMode(CENTER);
        this.Visiblity=this.Visiblity-5;
        tint (255,this.Visiblity);
        translate(pos.x, pos.y);
        rect(0,0,this.width, this.height);
        pop();
      }
}