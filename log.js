class Log{
    constructor (x,y,height,angle){
        var options={
            "density":1.5,
            "friction":1.0,
            "restitution":0.5 

        }
        this.body=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("blue");
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.height,this.width);
        pop();  
    }
}