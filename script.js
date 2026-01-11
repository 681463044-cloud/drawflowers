Const canvas = document.getElementById(‘canvas’);
Const ctx = canvas.getContext(‘2d’);
Const cleanBtn = document.getElementById(‘clean-btn’);

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight – 100;

Function drawFlower(x, y) {
// สุ่มสี
Const colors = [‘#ff4d6d’, ‘#ff758f’, ‘#ffb3c1’, ‘#7b2cbf’, ‘#00b4d8’];
Const color = colors[Math.floor(Math.random() * colors.length)];

// วาดก้าน
Ctx.beginPath();
Ctx.moveTo(x, canvas.height);
Ctx.quadraticCurveTo(x + 20, y + (canvas.height-y)/2, x, y);
Ctx.strokeStyle = ‘green’;
Ctx.lineWidth = 3;
Ctx.stroke();

// วาดกลีบดอก
Ctx.fillStyle = color;
For (let I = 0; I < 6; i++) {
Ctx.beginPath();
Const angle = (I * 60) * Math.PI / 180;
Const px = x + Math.cos(angle) * 15;

Const py = y + Math.sin(angle) * 15;
Ctx.arc(px, py, 10, 0, Math.PI * 2);
Ctx.fill();
}

// เกสร
Ctx.beginPath();
Ctx.fillStyle = ‘yellow’;
Ctx.arc(x, y, 7, 0, Math.PI * 2);
Ctx.fill();
}

Canvas.addEventListener(‘click’, € => {
drawFlower(e.clientX, e.clientY);
});

cleanBtn.addEventListener(‘click’, () => {
ctx.clearRect(0, 0, canvas.width, canvas.height);
});
