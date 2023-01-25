const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var r, T, L;
var quadrille;
var x = 2, y = 2;
var c;

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  c = color('#007ACC');
  quadrille = createQuadrille([[color('cyan'), '👽'                  ],
                               [null,          '🤔',            '🙈' ],
                               [null,          color('#770811'),     ],
                               ['g',           'o',             'l'  ]
                              ]);
  // 178                            
  T = createQuadrille([[null, c, null],
                       [c,    c],
                       [null, c],
                      ]);
  // 2343
  L = createQuadrille([ [c],
                        [c],
                        [c],
                        [c, c, c],
                       ]);
  console.log(`L bitboard:`, L.toInt());
  console.log(`T bitboard:`, T.toInt());
  //r = createQuadrille(5, 8);
  r = createQuadrille(5, 8, 11, color('yellow'));
  //r = createQuadrille(3, 2343, '👽');
  //r = createQuadrille(3, 178, '👽');
}

function draw() {
  background('#060621');
  drawQuadrille(quadrille, {col: 2, row: 12, cellLength: LENGTH, outline: 'green'});
  drawQuadrille(r, {col: x, row: y, cellLength: LENGTH, outline: 'blue', board: true});
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    r.reflect();
  } else if (keyCode === DOWN_ARROW) {
    r.rotate();
  }
  if (key == 'c') {
    r.clear();
  }
  if (key === 'a') {
    x = x > 0 ? x - 1 : x;
  }
  if (key === 's') {
    x = x < COLS - quadrille.width ? x + 1 : x;
  }
  if (key === 'w') {
    y = y > 0 ? y - 1 : y;
  }
  if (key === 'z') {
    y = y < ROWS - quadrille.height ? y + 1 : y;
  }
  if (key == 'r') {
    r.rand(7, color('red'));
  }
  if (key == 't') {
    //quadrille.rand();
    r.rand(15, color('green'));
  }
}

function debugQuadrille(quadrille) {
  console.log(quadrille.shape);
}
