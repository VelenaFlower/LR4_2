var canvas = document.getElementById('canvas');
var x = canvas.getContext('2d');
x.strokeRect(0,0,500,500);

x.beginPath();
x.moveTo(100, 450);
x.lineTo(450, 450);
x.lineWidth = 2;
x.stroke();

x.beginPath();
x.moveTo(100, 450);
x.lineTo(100, 50);
x.lineWidth = 2;
x.stroke();

x.fillStyle = "purple";
x.font = "20px Arial sans-serif";
x.fillText("Годы",15,250);

x.fillStyle = "purple";
x.font = "20px Arial sans-serif";
x.fillText("3",85,380);

x.fillStyle = "purple";
x.font = "20px Arial sans-serif";
x.fillText("6",85,290);

x.fillStyle = "purple";
x.font = "20px Arial sans-serif";
x.fillText("9",85,200);

x.fillStyle = "purple";
x.font = "20px Arial sans-serif";
x.fillText("12",78,100);

x.fillStyle = "darkcyan";
x.font = "18px Arial sans-serif";
x.fillText("Школа",140,470);

x.fillStyle = "darkblue";
x.font = "18px Arial sans-serif";
x.fillText("Колледж",240,470);

x.fillStyle = "maroon";
x.font = "18px Arial sans-serif";
x.fillText("Университет",340,470);

var grd=x.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"darkslategray");
grd.addColorStop(1,"turquoise");
x.fillStyle=grd;
x.fillRect(130,130,70,319);

x.fillStyle = "royalblue";
x.fillRect(240,349,70,100);

var img=document.getElementById("own");
var pat=x.createPattern(img,"repeat");
x.rect(350,309,70,140);
x.fillStyle=pat;
x.fill();

var diagr = document.getElementById("diagr");
var d = diagr.getContext('2d');
d.strokeRect(0,0,500,400);

d.fillStyle = "darkmagenta";
d.fillRect(300,180,15,15);

d.fillStyle = "green";
d.fillRect(300,220,15,15);

d.fillStyle = "hotpink";
d.fillRect(300,260,15,15);

d.fillStyle = "darkcyan";
d.fillRect(300,300,15,15);

d.fillStyle = "darkmagenta";
d.font = "23px Arial serif";
d.fillText("Сон",330,193);

d.fillStyle = "green";
d.font = "23px Arial serif";
d.fillText("Университет",330,233);

d.fillStyle = "hotpink";
d.font = "23px Arial serif";
d.fillText("Дорога",330,273);

d.fillStyle = "darkcyan";
d.font = "23px Arial serif";
d.fillText("Остальное",330,313);

d.beginPath();
d.arc(150,230,80,0,2*Math.PI);
d.lineWidth = 15;
d.strokeStyle = "grey";
d.stroke();

d.fillStyle = "darkmagenta";
d.beginPath();
d.arc(150, 230, 75, 0,0.7*Math.PI, false);
d.lineTo(150,230);
d.fill();

d.fillStyle = "green";
d.beginPath();
d.arc(150, 230, 75,0.7*Math.PI,0, false);
d.lineTo(150,230);
d.fill();

d.fillStyle = "hotpink";
d.beginPath();
d.arc(150, 230, 75, -Math.PI/80*60, 0, false);
d.lineTo(150,230);
d.fill();

d.fillStyle = "darkcyan";
d.beginPath();
d.arc(150, 230, 75, -Math.PI/180*95, 0, false);
d.lineTo(150,230);
d.fill();

d.shadowOffsetX=3;
d.shadowOffsetY=3;
d.shadowBlur=5;
d.shadowColor='black';
d.fillStyle = "purple";
d.font = "33px Monotype Corsiva";
d.fillText("Диаграмма МОЙ ДЕНЬ",80,60);






