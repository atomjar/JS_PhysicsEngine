var xoff = 0

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(50)

  // var x = random(0, width)

  var x = noise(xoff) * width

  xoff += 0.05

  fill(255)
  ellipse(x, 180, 50, 50)
}
