// Primitive literal type

let msg: 'hello' = 'hello';

msg = 'hello'; // OK

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
  if (port === 3000 || port === 3001) {
    console.log(`Server started on ${protocol}://localhost:${port}`);
  } else {
    throw new Error('Invalid port');
  }
  return 'Server started';
}

startServer('http', 3001); // OK

function createAnimation(
  id: string | number,
  animName: string,
  timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease',
  duration: number,
  iterCount: 'infinite' | number,
): void {
  // const elem = document.getElementById(`#${id}`) as HTMLElement;
  // if (elem) {
  console.log(`${animName} ${timingFunc} ${duration}s ${iterCount}`);
  // elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iterCount}`;
  // }
}

createAnimation('id', 'fade', 'ease-in', 2, 'infinite'); // OK
