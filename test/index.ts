// Primitive literal type

let msg: 'hello' = 'hello';

msg = 'hello'; // OK

const serverConfig: { protocol: 'http' | 'https'; port: 3000 | 3001 } = {
  port: 3000,
  protocol: 'https',
};

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
): 'Server started' => {
  console.log(`Server started on ${protocol}://localhost:${port}`);
  return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunction = 'ease' | 'ease-out' | 'ease-in'; // Псевдоним типа
type AnimationID = string | number;

function createAnimation(
  id: AnimationID,
  animName: string,
  timingFunc: AnimationTimingFunction = 'ease',
  duration: number,
  iterCount: 'infinite' | number,
): void {
  // const elem = document.getElementById(`#${id}`) as HTMLElement;
  // if (elem) {
  console.log(` ${animName} ${timingFunc} ${duration}s ${iterCount}`);
  // elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iterCount}`;
  // }
}

createAnimation('id', 'fade', 'ease-in', 2, 'infinite'); // OK
