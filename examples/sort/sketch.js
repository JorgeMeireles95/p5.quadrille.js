const ROWS = 20;
const COLS = 40;
const LENGTH = 20;
let graphics;
let current, matrixCells, stringCells, arrayCells, bitboardCells, uniformCells;
let al;

function preload() {
  al = loadImage('abraham_lincoln.jpg');
}

function setup() {
  let c1 = color(random(255), random(255), random(255), 255);
  let c2 = color(random(255), random(255), random(255), 255);
  let c3 = color(random(255), random(255), random(255), 255);
  let e1 = '🗣';
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  //Quadrille.CELL_LENGTH = 500;
  graphics = createGraphics(Quadrille.CELL_LENGTH, Quadrille.CELL_LENGTH);
  matrixCells = createQuadrille([[c1, 'g'],
  [0, 'o', al],
  [al, 'l'],
  [e1, c2, c3]
  ]);
  stringCells = createQuadrille('!@#,$%^>.,i*');
  arrayCells = createQuadrille(5, [0, 'o', al, al, 'l', e1, c2, c3]);
  bitboardCells = createQuadrille(4, int(random(1, 1048576)), e1);
  let w = int(random(2, 6));
  let h = int(random(2, 6));
  uniformCells = createQuadrille(w, h, int(random(1, w * h)), al);
}

function draw() {
  background('#2E0E36');
  if (current) {
    drawQuadrille(current, { /*cellLength: LENGTH,*/ outline: 'magenta', board: true, cellLength: 20 });
  }
  else {
    //Quadrille.COLOR({ graphics: graphics, outline: 'blue', outlineWeight: 6/*, cellLength: Quadrille.CELL_LENGTH */});
    //Quadrille.IMAGE({ graphics: graphics, cell: al });
    graphics.background('white');
    Quadrille.CHAR({ graphics: graphics, cell: 'g', outline: 'black', outlineWeight: 0 });
    //Quadrille.NUMBER({ graphics: graphics, outlineWeight: 0, min: -1, max: 1 });
    //image(graphics, 0, 0);
    graphics.loadPixels();
    let r, g, b, a;
    r = g = b = a = 0;
    let total = graphics.pixels.length / 4;
    for (let i = 0; i < total; i++) {
      r += graphics.pixels[4 * i];
      g += graphics.pixels[4 * i + 1];
      b += graphics.pixels[4 * i + 2];
      a += graphics.pixels[4 * i + 3];
    }
    r /= total;
    g /= total;
    b /= total;
    a /= total;
    graphics.updatePixels();
    let wa = 0.299 * r + 0.587 * g + 0.114 * b;
    console.log('hey', wa);
    image(graphics, 0, 0);
  }
}

function keyPressed() {
  if (key === 'a') {
    current = arrayCells;
  }
  if (key === 'b') {
    current = bitboardCells;
  }
  if (key === 'm') {
    current = matrixCells;
  }
  if (key === 's') {
    current = stringCells;
  }
  if (key === 'u') {
    current = uniformCells;
  }
  if (key === 'q') {
    current = null;
  }
  if (key === 'x') {
    current.sort();
  }
}
