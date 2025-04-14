let shapes = [];
let points = [[-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], [6, 0], [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 初始化一百個形狀
  for (let i = 0; i < 100; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      speed: random(1, 5)
    });
  }
}

function draw() {
  background("#ffe5ec");
  textSize(32);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  fill("#fb6f92");
  text("Hellow World!", width / 2, height / 2);
  fill("ff0000");
  stroke("#0000ff");

  // 繪製並更新一百個形狀
  for (let shape of shapes) {
    fill(shape.color);
    noStroke();
    push();
    translate(shape.x, shape.y);
    scale(shape.size / 10);
    beginShape();
    for (let point of points) {
      vertex(point[0], point[1]);
    }
    endShape(CLOSE);
    pop();

    // 更新形狀的 x 座標
    shape.x += shape.speed;

    // 當形狀超出畫面時，改變移動方向
    if (shape.x > width || shape.x < 0) {
      shape.speed *= -1;
    }
  }
}
