class Pig{
    constructor(x,y){
        var options={
            "density":1.0,
            "friction":1.3,
            "restitution":0.5 

        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    };
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle); 
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.height,this.width);
        pop();
}

}