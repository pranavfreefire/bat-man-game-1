class Drop{
	constructor(x,y,r)
	{
		var options={
			'restitution':0.1,
            'friction':0.1,
            'density':1.0
           
		}
		this.x=x;
		this.y=y;
		//this.r=r
		//this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		//World.add(world, this.body);

		this.body = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.body)

	}
	updateY(){
		if(this.body.position.y > 700){

			Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
		}
	}
	display()
	{
			var droppos=this.body.position;		
			push()
			translate(droppos.x, droppos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke("black");
			fill(rgb(92, 114, 237));
            ellipseMode(CENTER);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
			
            

            pop()
	}


	

    

}