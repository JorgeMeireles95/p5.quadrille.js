const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
let t, I, T, L, Lbit, test;
let quadrille;
let clone;
let x = 2, y = 2;
let c;

class Cuadricula extends Quadrille {
  constructor() {
    super(...arguments);
  }
}

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  c = color('red');
  quadrille = new Cuadricula([[color('cyan'), '👽',             0    ],
                               [0,             '🤔',             c ],
                               [0,             color('#770811'), 0   ],
                               ['g',           'o',             'l'  ]
                              ]);
  T = new Cuadricula([[0, c, 0],
                       [c, c, 0],
                       [0, c, 0],
                      ]);
  L = new Cuadricula([ [c, 0, 0],
                        [c, 0, 0],
                        [c, 0, 0],
                        [c, c, c],
                       ]);
  t = new Cuadricula(3, 3);
  console.log(t.width, t.height);
  t.from(154, '👽');
  //Lbit = createQuadrille(3, 4);
  //Lbit.from(2343, '👽');
  Lbit = new Cuadricula(3, 2343, '👽');
  console.log('Lbit width: ', Lbit.width);
  console.log('Lbit height: ', Lbit.height);
  console.log('Lbit size: ', Lbit.size);
  console.log('L int: ', L.toInt());
  console.log('Lbit int: ', Lbit.toInt());
  quadrille.reflect();
  clone = quadrille.clone();
  clone.reflect();
  test = createQuadrille(4, int(random(1, 1048576)), color('#F0B25A'));
  c.setBlue(255);
  /*
  I = createQuadrille([
    [0, c, 0, 0],
    [0, c, 0, 0],
    [0, c, 0, 0],
    [0, c, 0, 0],
   ]);
   */
   I = createQuadrille([
    [0, 0, 0, 0, 0, 0],
    [0, 0, c, 0, 0, 0],
    [0, 0, c, 0, 0, 0],
    [0, 0, c, 0, 0, 0],
    [0, 0, c, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
   ]);
}

function draw() {
  background('#060621');
  drawQuadrille(quadrille, {x: x, y: y, cellLength: LENGTH, outlineWeight: 2, outline: 'green'});
  drawQuadrille(I, {x:2, y:12, cellLength: LENGTH, outline:'blue'});
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    quadrille.reflect();
  } else if (keyCode === DOWN_ARROW) {
    I.rotate();
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
  if (key === 't') {
    test = createQuadrille(4, int(random(1, 1048576)), color('#F0B25A'));
  }
  if (key === 'd') {
    test.delete(test.height - 1);
  }
  if (key === 'p') {
    console.log(I.toInt());
  }
  if (key === 'r') {
    quadrille.randomize();
  }
}