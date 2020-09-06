class Ground {
    constructor (x,y,width,height,colour){
          var options  = {
            isStatic: true }
         this.width = width 
         this.height  = height 
         this.body  = Bodies.rectangle (x,y,width,height,options);   
         this.colour = colour
         World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill(this.colour);
        rect(0, 0, this.width, this.height);
        pop()
    }
}