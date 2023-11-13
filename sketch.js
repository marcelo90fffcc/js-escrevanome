function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("blue")
    fill("red")
    
    if(mouselsPressed){
      rect(mouseX, mouseY, 20, 30);
    }
  }