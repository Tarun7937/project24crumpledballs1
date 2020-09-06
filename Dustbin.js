class Dustbin {
    constructor (x,y) {
this.x = x 
this.y = y 
this.dustbinw = 200
this.dustbinh = 100
this.wallt = 20
this.angle =  0


this.bottomb = Bodies.rectangle(this.x,this.y,this.dustbinw,this.wallt,{isStatic:true});
this.leftb = Bodies.rectangle(this.x-this.dustbinw/2,this.y - this.dustbinh/2,this.wallt,this.dustbinh,{isStatic:true});
Matter.Body.setAngle(this.leftb,this.angle);

this.rightb = Bodies.rectangle(this.x+this.dustbinw/2,this.y - this.dustbinh/2,this.wallt,this.dustbinh,{isStatic:true});
Matter.Body.setAngle(this.rightb,-1*this.angle)
World.add(world,this.bottomb)
World.add(world,this.leftb)
World.add(world,this.rightb)

}
 display()
    {
            var posBottom=this.bottomb.position;
            var posLeft=this.leftb.position;
            var posRight=this.rightb.position;

            

            push()
            translate(posLeft.x, posLeft.y);
            rectMode(CENTER)
            //strokeWeight(4);
            angleMode(RADIANS)
            fill(255)
            stroke(255)
            rotate(this.angle)
            rect(0,0,this.wallt, this.dustbinh);
            pop()

            push()
            translate(posRight.x, posRight.y);
            rectMode(CENTER)
            //strokeWeight(4);
            stroke(255)
            angleMode(RADIANS)
            fill(255)
            rotate(-1*this.angle)
            rect(0,0,this.wallt, this.dustbinh);
            pop()

            push()
            translate(posBottom.x, posBottom.y);
            rectMode(CENTER)
            //strokeWeight(4);
            stroke(255)
            angleMode(RADIANS)
            fill(255)
            rect(0,0,this.dustbinw, this.wallt);
            pop()
            
    }

}


