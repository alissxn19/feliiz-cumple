// Confeti Adelante ULTRA PRO (Sasuke vibes)

window.oncontextmenu = function () {
  return false;
};

const canvasConfeti2 = document.getElementById("canvas2");
const ctxConfeti2 = canvasConfeti2.getContext("2d");

let ancho2 = (canvasConfeti2.width = window.innerWidth);
let alto2 = (canvasConfeti2.height = window.innerHeight);

let confetis2 = [];

const coloresConfeti2 = [
  "#F3C6CB",
  "#E7A1A8",
  "#CDB4DB",
  "#7B2CBF",
  "#FFF5F7",
];

// 🔴 Crear partículas
function crearConfeti2() {
  const cantidad = 130;
  for (let i = 0; i < cantidad; i++) {
    confetis2.push({
      x: Math.random() * ancho2,
      y: Math.random() * -alto2,
      r: Math.random() * 6 + 3,
      color: coloresConfeti2[Math.floor(Math.random() * coloresConfeti2.length)],
      velocidadY: Math.random() * 2 + 1.5,
      velocidadX: Math.random() * 3 - 1.5,
      tipo: Math.random() < 0.15 ? "sharingan" : "normal", // 🔥 algunos especiales
      pulse: Math.random() * 0.05 + 0.02, // 💜 velocidad latido
      fase: Math.random() * Math.PI * 2,
    });
  }
}

// 🔥 Dibujar Sharingan
function dibujarSharingan(x, y, r) {
  // círculo rojo
  ctxConfeti2.beginPath();
  ctxConfeti2.arc(x, y, r, 0, Math.PI * 2);
  ctxConfeti2.fillStyle = "#C1121F";
  ctxConfeti2.fill();

  // borde negro
  ctxConfeti2.lineWidth = 2;
  ctxConfeti2.strokeStyle = "#000";
  ctxConfeti2.stroke();

  // tomoe (3 puntos)
  for (let i = 0; i < 3; i++) {
    let ang = (Math.PI * 2 * i) / 3;
    let tx = x + Math.cos(ang) * r * 0.6;
    let ty = y + Math.sin(ang) * r * 0.6;

    ctxConfeti2.beginPath();
    ctxConfeti2.arc(tx, ty, r * 0.2, 0, Math.PI * 2);
    ctxConfeti2.fillStyle = "#000";
    ctxConfeti2.fill();
  }
}

// ⚡ Dibujar energía tipo chidori
function dibujarChidori(x, y, size) {
  ctxConfeti2.beginPath();
  ctxConfeti2.moveTo(x, y);

  for (let i = 0; i < 3; i++) {
    let offsetX = (Math.random() - 0.5) * size;
    let offsetY = (Math.random() - 0.5) * size;
    ctxConfeti2.lineTo(x + offsetX, y + offsetY);
  }

  ctxConfeti2.strokeStyle = "#7B2CBF";
  ctxConfeti2.lineWidth = 1.5;
  ctxConfeti2.stroke();
}

function animarConfeti2() {
  ctxConfeti2.clearRect(0, 0, ancho2, alto2);

  for (let i = 0; i < confetis2.length; i++) {
    let c = confetis2[i];

    // 💜 efecto pulse
    c.fase += c.pulse;
    let scale = 1 + Math.sin(c.fase) * 0.3;

    ctxConfeti2.shadowColor = c.color;
    ctxConfeti2.shadowBlur = 8;

    if (c.tipo === "sharingan") {
      dibujarSharingan(c.x, c.y, c.r * scale);
    } else {
      ctxConfeti2.beginPath();
      ctxConfeti2.arc(c.x, c.y, c.r * scale, 0, Math.PI * 2);
      ctxConfeti2.fillStyle = c.color;
      ctxConfeti2.fill();
    }

    // ⚡ añadir chidori aleatorio
    if (Math.random() < 0.05) {
      dibujarChidori(c.x, c.y, 10);
    }

    // movimiento
    c.y += c.velocidadY;
    c.x += c.velocidadX;

    if (c.x < 0 || c.x > ancho2) {
      c.velocidadX *= -1;
    }

    if (c.y > alto2) {
      c.y = -10;
      c.x = Math.random() * ancho2;
    }
  }

  requestAnimationFrame(animarConfeti2);
}

crearConfeti2();

setTimeout(() => {
  animarConfeti2();
}, 1000);