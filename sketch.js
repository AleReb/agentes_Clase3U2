let agentes = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 40; i++) {
    agentes.push({
      x: random(40, 360),
      y: random(40, 360),
      vx: random(-2.4, 2.4),
      vy: random(-2.4, 2.4) });
  }
}

function draw() {
  background(245, 243, 235);
  noStroke(); fill(46, 196, 230);
  for (let a of agentes) {
    a.x += a.vx;
    a.y += a.vy;
    if (a.x < 7 || a.x > 393) a.vx *= -1;
    if (a.y < 7 || a.y > 393) a.vy *= -1;
    circle(a.x, a.y, 14);
  }
}
