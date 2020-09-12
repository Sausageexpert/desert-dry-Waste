  
class Ground {
    constructor(x, y, width, height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
 
        push();
        var where = this.body.position;
    translate(where.x, where.y);

        fill("white");
        rectMode(CENTER);

        rect(0, 0, this.width, this.height);
        pop();


    }
}