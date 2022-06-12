


let myColorsprimary = [[255, 255, 0], [0, 107, 255], [0, 199, 64], [255, 63, 42]];

let myColorssecond = [[255, 185, 213],[255, 217, 172], [140, 212, 255], [107, 255, 178], [228, 210, 196]];



  allcolours = [[255, 255, 0], [0, 107, 255], [0, 199, 64], [255, 185, 213],[255, 217, 172], [140, 212, 255], [107, 255, 178], [228, 210, 196]];

let input, button, greeting;
let r, g, b;
let canvas = {}, content = {};


var myFont;
function preload() {
  myFont = loadFont('Fugue ArtFund Regular.otf');
  
}

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  
 

  input = createInput();
  //input.style('font-size', '28px');
 input.position(30, 215);
  input.style('font-size', '23px');
  input.style('background-color', '#ffffff');
  input.size('200');
  
  
  

  button1 = createButton('Submit / Refresh_');
  button1.style('font-family', 'Arial');
  button1.position(input.x,60 + input.width)
  button1.mousePressed(greet);
  button1.style('font-size', '16px');
    //button1.style("background-color", "#FFFF00");
  
  
    button3 = createButton('Save');
   button3.style('font-size', '16px');
  button3.position (input.x,120 + input.width);
  button3.mousePressed(save1);
  //button3.style("background-color", "#FFFF00");
  
  //button = createButton('Random');
  //button.style('font-size', '16px');
  //button.position (input.x + input.width - 153, 235);
  //button.mousePressed(randomcolours);
  //button.style("background-color", "#FFFF00");
  

  
  
  background(random(myColorsprimary)); 
  
   r = random (255);
   g = random(255);
   b = random(255);
  
  R = (255, 255, 0);
  Y = (255,255,0);
  B = (0, 107, 255);
  G = (0, 199, 64);
  
  
  
}

function draw() {

    //fill(0,0,0)
  textFont(myFont)
 
  textSize(50)
  text('Student Art Pass_', 30, 75);

  textSize(50)
  text('Hello__ type in your full name', 30, 170);

  
   textSize(50)
  text('_with Art Fund', windowWidth - 330, windowHeight - 30);
  
  textSize(50)
  text('#WeAreArtful', 30, windowHeight - 30);
  //stroke(255,255,0)
  //stroke(255,255,0)
  //fill(r,g,b);
  //strokeWeight(0.1);
  
//greeting.style('font-family', 'Arial');
  //greeting.style('font-size', '36px')
 greeting.position(30, 130);


 }
   
   function save1() {
  save();

 
}

function reset () {
 
  clear();
setup();
  
}

function greet() {
  
  fillColour = random(myColorssecond);
 strokeColour = random(myColorsprimary);
  
  
  
  const name = input.value();
    //greeting.html('hello ' + name + '!');
 // input.value('');
   
  //reset();
  
textSize(250);
   fill(255,255,0);
   stroke(0, 107, 255);
    strokeWeight(4);
  
  
  for (let i = 0; i < 200; i++) {
    
    push();
    textSize(250);
    fill((fillColour));
    stroke((strokeColour));
    strokeWeight(30);
    scale(random * 100);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  

  
  }
}

