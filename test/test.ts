type Protocol = 'http' | 'https';

type Config = {
  protocol: Protocol;
  port: 3000 | 3001;
};

type Role = {
  role: string;
};

type ConfigWithRole = Config & Role;

const startNewServer: ConfigWithRole = {
  protocol: 'http',
  port: 3000,
  role: 'admin',
};

const startServerNew: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void,
): 'Server started' => {
  log(`Server started on ${protocol}://localhost:${port}`);
  return 'Server started';
};
