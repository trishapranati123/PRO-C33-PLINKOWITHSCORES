var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var turn =0;
var particle ;
var gameState="play";
var count=0;
var yellowline;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  fill("yellow");
  //yellowline = new Ground(width/2,450,width,2);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle (mouseX,10,10,10);
  }
}

function draw() {
  background("black");
 // yellowline.display();
 textSize(20)
 if(gameState=="end")
  {
    fill("red");
    text("GAME OVER",width/2,420);
  }
  
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  if(particle!=null)
  {
    particle.display();
    if(particle.body.position.y>450)
    {
      if(particle.body.position.x<300)
      {
        score=score+500;
        particle=null;
        if(count>=5) gameState ="end";
      }
      else if(particle.body.position.x > 301 && particle.body.position.x < 600)
      {
        score=score+100;
        particle=null;
        if(count>=5) gameState ="end";

      }
      else if(particle.body.position.x > 601 && particle.body.position.x < 900)
      {
        score=score+200;
        particle=null;
        if(count>=5) gameState ="end";
      }
    }
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //  score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
  //   particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {     
     divisions[k].display();
   }
   for (var x=20;x<width;x=x+80)
   {
     if(x < 300)
      text(500,x,520);
     else if(x > 301 && x < 600)
      text(100,x,520);
     else if(x > 601)
      text(200,x,520);
   }
   
   
}