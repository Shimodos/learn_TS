const TOP = 'Top';
const BOTTOM = 'Bottom';
const LEFT = 'Left';
const RIGHT = 'Right';

enum Direction {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
}

enum timingFunc {
  EASE = 'ease',
  EASE_IN = 'ease-in',
  EASE_OUT = 'ease-out',
}

enum timingFuncB {
  EASE = 1,
  EASE_IN = 2,
  EASE_OUT = EASE_IN + 1,
}

function frame(elem: string, dir: Direction, tFunc: timingFunc): void {
  if (dir === Direction.RIGHT) {
    console.log(tFunc);
  }
}

frame('test', Direction.RIGHT, timingFunc.EASE_OUT);
