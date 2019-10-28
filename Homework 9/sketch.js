function setup() {
  createCanvas(400,400);
}

function draw() {
	strokeWeight(2)
   	background(220);
   	textSize(32);
   	text('Creative Portrait!', 10, 30);
    	rect(30,60,300,300);
	ellipse(180,210,240,275);
 	circle(130,160,50);
	circle(220,160,50);
	triangle(165, 245, 165, 230, 190, 245);
	arc(180,270,165,70,0,PI, CHORD);
	stroke(20);
	line(180,270,180,305);
	stroke(20);
	line(160,270, 160, 304);
	stroke(20);
	line(200,270,200,304);
	stroke(20);
	line(140,270, 140, 300);
	stroke(20);
	line(220,270,220,300);
	strokeWeight(5);
	point(130,170);
	point(220,170);
	noLoop()
	strokeWeight(1);
	textSize(10)
	text('Jonathan Mitchell', 250, 350)
}

