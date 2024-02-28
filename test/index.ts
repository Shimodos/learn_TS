// Primitive literal type

let msg: 'hello' = 'hello';

msg = 'hello'; // OK

type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  port: 3000,
  protocol: 'https',
  role: 'admin',
};

const backupConfig: ConfigWithRole = {
  port: 3001,
  protocol: 'http',
  role: 'user',
};

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunction = (
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
