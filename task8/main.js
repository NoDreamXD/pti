const GRID_SIZE = 71;

const BORDER_OFFSET = 3;

const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
const cellWidth = canvasWidth / GRID_SIZE;
const cellHeight = canvasHeight / GRID_SIZE;

let pts = [[(GRID_SIZE - 1) / 2, (GRID_SIZE - 1) / 2]];
let wanderingPt = null;
// let y = 5;
// setInterval(() => {
//   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//   ctx.beginPath()
//   ctx.rect(60, y, 50, 50);
//   ctx.fill();
//   y = y + 10;
// }, 250);

function clearCtx() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function drawCell(i, j) {
  ctx.beginPath();
  ctx.rect(cellWidth * j - 1, cellHeight * i - 1, cellWidth + 2, cellHeight + 2);
  ctx.fill();
}

function drawPoints() {
  pts.map((pt) => drawCell(pt[0], pt[1]));
}

function getMinMaxCoordinatesPts() {
  const [xs, ys] = pts.reduce(
    ([pxs, pys], pt) => [
      [...pxs, pt[0]],
      [...pys, pt[1]],
    ],
    [[], []]
  );
  xs.sort();
  ys.sort();
  const [xMin, xMax] = [xs[0], xs[xs.length - 1]];
  const [yMin, yMax] = [ys[0], ys[ys.length - 1]];
  return { xMin, xMax, yMin, yMax };
}

function drawBorder() {
  const { xMin, xMax, yMin, yMax } = getMinMaxCoordinatesPts();
  ctx.lineWidth = cellHeight;
  ctx.strokeStyle = "#faa";
  ctx.strokeRect(
    (yMin - (BORDER_OFFSET + 1) + 0.5) * cellHeight,
    (xMin - (BORDER_OFFSET + 1) + 0.5) * cellWidth,
    (yMax - yMin + 2 * (BORDER_OFFSET + 1)) * cellHeight,
    (xMax - xMin + 2 * (BORDER_OFFSET + 1)) * cellWidth
  );
}

function generateWanderingPoint() {
  const { xMin, xMax, yMin, yMax } = getMinMaxCoordinatesPts();
  const corners = [
    [xMin - BORDER_OFFSET, yMin - BORDER_OFFSET],
    [xMin - BORDER_OFFSET, yMax + BORDER_OFFSET],
    [xMax + BORDER_OFFSET, yMin - BORDER_OFFSET],
    [xMax + BORDER_OFFSET, yMax + BORDER_OFFSET],
  ];
  wanderingPt = corners[Math.floor(Math.random() * corners.length)];
}

const MOVE_VARIATION = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
function moveWanderingPoint() {
  const [x, y] = wanderingPt;
  const { xMin, xMax, yMin, yMax } = getMinMaxCoordinatesPts();
  let newX, newY;
  while (true) {
    const [dx, dy] =
      MOVE_VARIATION[Math.floor(Math.random() * MOVE_VARIATION.length)];
    [newX, newY] = [x + dx, y + dy];
    if (
      newX >= xMin - BORDER_OFFSET &&
      newX <= xMax + BORDER_OFFSET &&
      newY >= yMin - BORDER_OFFSET &&
      newY <= yMax + BORDER_OFFSET
    ) {
      break;
    }
  }
  wanderingPt = [newX, newY];
}

function isWanderingPtNearToPts() {
  const [wx, wy] = wanderingPt;

  return pts.some(([px, py]) => {
    return (
      (px - wx === 0 && Math.abs(py - wy) <= 1) ||
      (Math.abs(px - wx) <= 1 && py - wy === 0)
    );
  });
}

function onChangeWanderingPoint() {
  if (!wanderingPt) {
    generateWanderingPoint();
    return;
  }

  if (isWanderingPtNearToPts()) {
    pts = [...pts, wanderingPt];
    wanderingPt = null;
  }

  if (wanderingPt) {
    moveWanderingPoint();
    return;
  }
}

setInterval(() => {
  clearCtx();
  drawPoints();
  onChangeWanderingPoint();
  drawBorder();
  if (wanderingPt) {
    drawCell(...wanderingPt);
  }
}, 10);
