interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

function calcArea(side: number): Square;
function calcArea(a: number, b: number): Rect;
function calcArea(a: number, b?: number): Square | Rect {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

calcArea(5); // { side: 5, area: 25 }
calcArea(5, 10); // { a: 5, b: 10, area: 50 }
