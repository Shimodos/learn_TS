const serverConfig1: BasicConfig = {
  port: 3000,
  protocol: 'https',
  // role: 'admin',
};

const backupConfig: BasicConfig = {
  port: 3001,
  protocol: 'http',
};

interface BasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: BasicConfig): 'Server started' => {
  console.log(`Server started on ${config.protocol}://localhost:${config.port}`);
  return 'Server started';
};

startNewServer(serverConfig1);
startNewServer(backupConfig);
