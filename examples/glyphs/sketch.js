const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var polyomino;
var clone;

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  polyomino = createQuadrille([[color('cyan'), '👽',             0    ],
                               [0,             '🤔',            '🙈' ],
                               [0,             color('#770811'), 0   ],
                               ['g',           'o',             'l'  ]
                              ]);
  polyomino.reflect();
  clone = polyomino.clone();
  polyomino.reflect();
}

function draw() {
  background('#060621');
  drawQuadrille(polyomino, 2, 2, LENGTH, 2, 'red');
  drawQuadrille(clone, 2, 8, LENGTH, 2, 'blue');
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    polyomino.reflect();
  } else if (keyCode === DOWN_ARROW) {
    polyomino.rotate();
  }
}

function debugPolyomino(polyomino) {
  console.log(polyomino.shape);
}