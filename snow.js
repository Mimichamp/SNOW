class Snow{
    constructor(x,y,width,height){
        var options ={
            restitution: 0.1,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("snow4.webp");
        this.image.scale = 2;
    }

    display(){
        push()

        translate(this.x,this.y);
        image(this.image,0,0,this.width,this.height);

        pop()

    }
}