class Paper {
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            'restitution' :0.3,
            'friction' :0.5,
            'density' :1.2,
        }
        this.body = Bodies.circle(x, y,width, height, options);
        this.radius =  radius;

        World.add(world, this.body);
    }
    display(){
        ellispeMode(RADIUS);

        fill("skyblue");

        circle(this.position.x, this.position.y, this.radius);
    }

};
