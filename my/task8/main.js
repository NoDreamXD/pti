const FRAME_RATE = 60;

const TREE_STROKE_COLOR = "#aaa";
const TREE_CIRCLE_FILL_COLOR = "#10dc03";
const TREE_CIRCLE_STROKE_COLOR = "#215700";
const GROUND_COLOR = "#092900";
const BACKGROUND_COLOR = "#000424";
const STAR_FILL = "#0f0";

const TREE_MAX_DEPS = 9;
const TREE_LINE_MULTIPLIER = 1.2;
const TREE_CIRCLE_RADIUS_BASE = 3;
const TREE_START_ANGLE_ADD = -Math.PI / 24;
const TREE_AMPLITUDE_ANGLE_ADD = Math.PI / 512;
const TREE_ROOT_SIZE = 30;
const GROUND_HEIGHT = 55;
const START_PT_Y_OFFSET = 30;
const TREE_CIRCLE_CHANGE = 0.85;

const STAR_CHANCE = 0.05;
const STAR_MIN_DISTANCE = 2;
const STAR_MAX_DISTANCE = 15;
const STAR_COVER_HEIGHT = 4 / 5;

const FRAMES_TO_FULL_AMPLITUDE = FRAME_RATE * 3;
const RANDOM_SEED = Math.round(Math.random() * 1024);

const ctx = document.getElementById("mainCanvas").getContext("2d");

let curIter = 0;
let canvasSize = null;
let startPt = null;
let lineSize = null;

let idxIter = 0;
let treeAngleAdd = TREE_START_ANGLE_ADD;
let treeAngleDiff = Math.PI / 8;

let rnd = null;

// Drawing
function lineTo(ptX, ptY, w, h) {
  ctx.lineTo(ptX + w, ptY + h);
}

function fractalTree([ptX, ptY] = startPt, angle = Math.PI / 2, deps = 0) {
  if (deps == TREE_MAX_DEPS) return;

  const curLineSize =
    lineSize * Math.sqrt((TREE_MAX_DEPS - deps) / TREE_MAX_DEPS);
  const nextPt = [
    ptX + Math.cos(angle) * curLineSize,
    ptY - Math.sin(angle) * curLineSize,
  ];
  const angleMultiplier = Math.pow(
    (TREE_MAX_DEPS - deps) / TREE_MAX_DEPS,
    1 / 1.5
  );

  fractalTree(
    nextPt,
    angle + (treeAngleDiff + treeAngleAdd) * angleMultiplier,
    deps + 1
  );
  fractalTree(
    nextPt,
    angle + (-treeAngleDiff + treeAngleAdd) * angleMultiplier,
    deps + 1
  );

  // Draw line
  ctx.beginPath();
  ctx.strokeStyle = TREE_STROKE_COLOR;
  ctx.lineWidth = 0.5 + ((TREE_MAX_DEPS - deps) / TREE_MAX_DEPS) * 3;
  ctx.moveTo(ptX, ptY);
  ctx.lineTo(...nextPt);
  ctx.stroke();

  // Draw circle
  if (rnd.next().value < TREE_CIRCLE_CHANGE && deps > 2) {
    ctx.beginPath();
    ctx.strokeStyle = TREE_CIRCLE_STROKE_COLOR;
    ctx.fillStyle = TREE_CIRCLE_FILL_COLOR;
    ctx.arc(
      ...nextPt,
      TREE_CIRCLE_RADIUS_BASE * angleMultiplier * 3.5 + 1.5,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.stroke();
  }
}

function drawBackground() {
  // Draw background
  ctx.beginPath();
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.rect(0, 0, canvasSize[0], canvasSize[1]);
  ctx.fill();
  ctx.stroke();

  // Draw stars
  starAreaHeight = canvasSize[1] * STAR_COVER_HEIGHT;
  ctx.fillStyle = STAR_FILL;
  for (
    let i = 10;
    i < starAreaHeight;
    i +=
      STAR_MIN_DISTANCE +
      (STAR_MAX_DISTANCE - STAR_MIN_DISTANCE) * rnd.next().value
  ) {
    for (
      let j = 10;
      j < canvasSize[0] - 10;
      j +=
        STAR_MIN_DISTANCE +
        (STAR_MAX_DISTANCE - STAR_MIN_DISTANCE) * rnd.next().value
    ) {
      if (
        rnd.next().value <
        STAR_CHANCE * ((starAreaHeight - i) / starAreaHeight)
      ) {
        ctx.beginPath();
        ctx.arc(j, i, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

function drawGround() {
  // Draw root tree
  var gradient = ctx.createRadialGradient(
    ...startPt,
    0,
    ...startPt,
    TREE_ROOT_SIZE / 2
  );
  gradient.addColorStop(0, TREE_STROKE_COLOR);
  gradient.addColorStop(0.5, TREE_STROKE_COLOR);
  gradient.addColorStop(1, GROUND_COLOR);
  ctx.fillStyle = gradient;
  ctx.fillRect(
    startPt[0] - TREE_ROOT_SIZE / 2,
    startPt[1] - TREE_ROOT_SIZE / 2,
    startPt[0] + TREE_ROOT_SIZE / 2,
    startPt[0] + TREE_ROOT_SIZE / 2
  );

  // Draw ground
  ctx.beginPath();
  ctx.fillStyle = GROUND_COLOR;
  ctx.rect(0, canvasSize[1] - GROUND_HEIGHT, canvasSize[0], canvasSize[1]);
  ctx.fill();
  ctx.stroke();
}

function clearCanvas() {
  [mainCanvas.width, mainCanvas.height] = canvasSize;
}

function curFrame() {
  rnd = pseudoRandom(RANDOM_SEED);
  drawBackground();
  drawGround();
  fractalTree();
}

// Resize handler
function resizeCanvas() {
  [w, h] =
    canvasSize =
    [mainCanvas.width, mainCanvas.height] =
      [mainCanvas.clientWidth, mainCanvas.clientHeight];
  startPt = [w / 2, h - START_PT_Y_OFFSET];
  lineSize = (h * TREE_LINE_MULTIPLIER) / TREE_MAX_DEPS;
  curFrame();
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Animation
setInterval(() => {
  treeAngleAdd =
    TREE_START_ANGLE_ADD +
    TREE_AMPLITUDE_ANGLE_ADD *
      Math.sin((2 * Math.PI * idxIter) / FRAMES_TO_FULL_AMPLITUDE);
  clearCanvas();
  curFrame();
  idxIter += 1;
}, 1000 / FRAME_RATE);
