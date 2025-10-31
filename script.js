const questions = [
  // ======== TEXTO Y COLOR ========
  { question: "¿Qué propiedad cambia el color del texto?", options: ["color", "font-color", "text-style", "font"], answer: "color" },
  { question: "¿Qué propiedad cambia el tamaño del texto?", options: ["font-size", "text-size", "font-weight", "text-style"], answer: "font-size" },
  { question: "¿Qué propiedad define el tipo de letra?", options: ["font-family", "font-type", "text-font", "font"], answer: "font-family" },
  { question: "¿Qué propiedad controla el grosor del texto?", options: ["font-weight", "font-size", "text-bold", "weight"], answer: "font-weight" },
  { question: "¿Qué propiedad alinea el texto?", options: ["text-align", "align", "align-text", "justify"], answer: "text-align" },
  { question: "¿Qué propiedad convierte texto en mayúsculas?", options: ["text-transform", "text-case", "font-transform", "uppercase"], answer: "text-transform" },
  { question: "¿Qué propiedad define el espacio entre letras?", options: ["letter-spacing", "word-spacing", "line-height", "gap"], answer: "letter-spacing" },
  { question: "¿Qué propiedad define el espacio entre líneas de texto?", options: ["line-height", "spacing", "margin", "padding"], answer: "line-height" },
  { question: "¿Qué propiedad subraya el texto?", options: ["text-decoration", "underline", "border-bottom", "font-style"], answer: "text-decoration" },
  { question: "¿Qué propiedad cambia el estilo de fuente (cursiva)?", options: ["font-style", "font-weight", "text-style", "italic"], answer: "font-style" },

  // ======== BOX MODEL ========
  { question: "¿Qué propiedad da espacio interno?", options: ["padding", "margin", "border", "gap"], answer: "padding" },
  { question: "¿Qué propiedad da espacio externo?", options: ["margin", "padding", "border", "spacing"], answer: "margin" },
  { question: "¿Qué propiedad define el borde de un elemento?", options: ["border", "outline", "box-border", "frame"], answer: "border" },
  { question: "¿Qué propiedad redondea las esquinas?", options: ["border-radius", "corner", "round-border", "radius"], answer: "border-radius" },
  { question: "¿Qué propiedad agrega sombra a una caja?", options: ["box-shadow", "text-shadow", "shadow", "drop-shadow"], answer: "box-shadow" },
  { question: "¿Qué propiedad ajusta el modelo de caja para incluir borde y padding dentro del ancho?", options: ["box-sizing", "overflow", "display", "fit-box"], answer: "box-sizing" },

  // ======== FONDOS E IMÁGENES ========
  { question: "¿Qué propiedad define una imagen de fondo?", options: ["background-image", "image", "bg", "background"], answer: "background-image" },
  { question: "¿Qué propiedad evita que la imagen de fondo se repita?", options: ["background-repeat", "no-repeat", "background-size", "background-fit"], answer: "background-repeat" },
  { question: "¿Qué propiedad ajusta el tamaño del fondo?", options: ["background-size", "background-fit", "object-fit", "background-scale"], answer: "background-size" },
  { question: "¿Qué propiedad cambia la posición del fondo?", options: ["background-position", "position", "background-align", "align"], answer: "background-position" },

  // ======== DISPLAY Y POSICIÓN ========
  { question: "¿Qué propiedad define cómo se muestra un elemento?", options: ["display", "position", "visibility", "float"], answer: "display" },
  { question: "¿Qué propiedad posiciona un elemento de forma fija?", options: ["fixed", "absolute", "relative", "sticky"], answer: "fixed" },
  { question: "¿Qué valor de position sigue el scroll del usuario?", options: ["sticky", "relative", "fixed", "float"], answer: "sticky" },
  { question: "¿Qué propiedad controla la superposición de capas?", options: ["z-index", "index", "layer", "depth"], answer: "z-index" },
  { question: "¿Qué propiedad oculta un elemento pero mantiene su espacio?", options: ["visibility", "display", "opacity", "hidden"], answer: "visibility" },
  { question: "¿Qué propiedad oculta un elemento sin dejar espacio?", options: ["display: none", "visibility: hidden", "opacity: 0", "hide"], answer: "display: none" },

  // ======== FLEXBOX ========
  { question: "¿Qué valor de display activa flexbox?", options: ["flex", "grid", "block", "inline-flex"], answer: "flex" },
  { question: "¿Qué propiedad alinea elementos horizontalmente en flexbox?", options: ["justify-content", "align-items", "flex-direction", "align-content"], answer: "justify-content" },
  { question: "¿Qué propiedad alinea elementos verticalmente en flexbox?", options: ["align-items", "justify-content", "align-content", "align-self"], answer: "align-items" },
  { question: "¿Qué propiedad cambia la dirección del eje en flexbox?", options: ["flex-direction", "justify-content", "flex-flow", "orientation"], answer: "flex-direction" },
  { question: "¿Qué propiedad añade espacio entre elementos flexibles?", options: ["gap", "margin", "space-between", "flex-gap"], answer: "gap" },

  // ======== GRID ========
  { question: "¿Qué valor de display activa el grid?", options: ["grid", "flex", "block", "inline-grid"], answer: "grid" },
  { question: "¿Qué propiedad define el número de columnas en grid?", options: ["grid-template-columns", "columns", "grid-columns", "column-count"], answer: "grid-template-columns" },
  { question: "¿Qué propiedad define el número de filas en grid?", options: ["grid-template-rows", "grid-rows", "rows", "grid-template"], answer: "grid-template-rows" },
  { question: "¿Qué propiedad define el espacio entre celdas en grid?", options: ["grid-gap", "gap", "margin", "cell-gap"], answer: "grid-gap" },
  { question: "¿Qué propiedad combina filas o columnas en grid?", options: ["grid-area", "grid-span", "span", "merge"], answer: "grid-area" },

  // ======== ANIMACIONES ========
  { question: "¿Qué propiedad activa una animación?", options: ["animation", "transition", "transform", "motion"], answer: "animation" },
  { question: "¿Qué propiedad define la duración de una animación?", options: ["animation-duration", "animation-delay", "transition-time", "duration"], answer: "animation-duration" },
  { question: "¿Qué propiedad define cuántas veces se repite una animación?", options: ["animation-iteration-count", "animation-repeat", "loop", "iteration"], answer: "animation-iteration-count" },
  { question: "¿Qué propiedad cambia la velocidad de transición?", options: ["transition-timing-function", "transition-delay", "animation-speed", "transition"], answer: "transition-timing-function" },
  { question: "¿Qué propiedad retrasa el inicio de una animación?", options: ["animation-delay", "animation-duration", "transition-delay", "delay"], answer: "animation-delay" },

  // ======== VARIABLES Y SELECTORES ========
  { question: "¿Cómo se declara una variable CSS?", options: ["--nombre", "$nombre", "@nombre", "var-nombre"], answer: "--nombre" },
  { question: "¿Cómo se usa una variable CSS?", options: ["var(--nombre)", "$nombre", "get(--nombre)", "use(--nombre)"], answer: "var(--nombre)" },
  { question: "¿Qué selector selecciona todos los elementos?", options: ["*", "all", "html", "body"], answer: "*" },
  { question: "¿Qué selector selecciona por id?", options: ["#id", ".id", "id()", "getId"], answer: "#id" },
  { question: "¿Qué selector selecciona por clase?", options: [".clase", "#clase", "class()", "getClass"], answer: ".clase" },
  { question: "¿Qué selector aplica al pasar el mouse?", options: [":hover", ":focus", ":active", ":checked"], answer: ":hover" },
  { question: "¿Qué selector selecciona el primer hijo?", options: [":first-child", ":first", ":nth(1)", ":child(1)"], answer: ":first-child" },
  { question: "¿Qué selector selecciona elementos pares?", options: [":nth-child(even)", ":nth(2n)", ":even", ":pair"], answer: ":nth-child(even)" },

  // ======== RESPONSIVE DESIGN ========
  { question: "¿Qué regla se usa para estilos responsivos?", options: ["@media", "@responsive", "@screen", "@style"], answer: "@media" },
  { question: "¿Qué propiedad ajusta el ancho máximo de un elemento?", options: ["max-width", "width", "min-width", "limit-width"], answer: "max-width" },
  { question: "¿Qué unidad es relativa al ancho de la ventana?", options: ["vw", "vh", "%", "em"], answer: "vw" },
  { question: "¿Qué unidad es relativa al alto de la ventana?", options: ["vh", "vw", "%", "em"], answer: "vh" },
  { question: "¿Qué propiedad adapta el diseño a diferentes tamaños de pantalla?", options: ["flex-wrap", "responsive", "overflow", "min-width"], answer: "flex-wrap" },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;

  const progressPercent = ((currentQuestion) / questions.length) * 100;
  progressBar.style.width = progressPercent + "%";
}

function selectAnswer(button, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
    opt.disabled = true;
    if (opt.textContent === correctAnswer) opt.classList.add("correct");
  });

  if (button.textContent === correctAnswer) score++;
  else button.classList.add("incorrect");

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) loadQuestion();
  else showResult();
});

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const percent = Math.round((score / questions.length) * 100);
  scoreEl.textContent = `Tu puntaje: ${score}/${questions.length} (${percent}%)`;

  if (percent === 100) feedbackEl.textContent = "🔥 ¡Maestro del CSS! Dominas todo.";
  else if (percent >= 80) feedbackEl.textContent = "💪 Excelente, tienes un dominio sólido de CSS.";
  else if (percent >= 60) feedbackEl.textContent = "👍 Buen trabajo, repasa algunos temas.";
  else feedbackEl.textContent = "🧩 Necesitas practicar más, ¡sigue intentando!";
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
