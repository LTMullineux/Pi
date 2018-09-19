let d;
let r;
let centre;
let pie;
let pointsIn;
let pointsTotal;
let precision;
let speed;
let estimate;

function setup() {
  //frameRate(1);
  createCanvas(400, 400);
  background(0);
  d = width;
  r = floor(d / 2);
  centre = createVector(r, r)
  pointsIn = 0;
  pointsTotal = 0;
  pie = 0;
  precision = 10000000;
  createP("Estimate of Pi:");
  estimate = createP("");
  createP("Sample Speed:");
  speed = createSlider(1,60,60);
}

// function to test if in circle
function inCircle(vec) {
  let dCircle = vec.dist(centre);
  if (dCircle < r) {
    return true;
  } else {
    return false;
  }
}

function draw() {
  // control sample speed by slider value
  frameRate(speed.value());

  // uniformly draw a point and recalc pie with 4*in/total
  pointsTotal++;
  let x = random(0, d);
  let y = random(0, d);
  let vec = createVector(x, y);
  let isIn = inCircle(vec);
  if (isIn) {
    pointsIn++;
    fill(255, 100);
  	noStroke();
  	ellipse(vec.x, vec.y, 5, 5);
  }
  pie = 4 * pointsIn / pointsTotal;
  estimate.html(pie);

  // test circle
  // stroke(255);
  // noFill();
  // ellipse(r, r, d, d);

  // pi text output
  //textAlign(CENTER);
  //textSize(60);
  //fill(255);
  //text(round(pie * precision) / precision, r, 450);
}
