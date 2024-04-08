function setName() {
  return 'Hello';
}

class Player {
  private static game: string;

  #login: string;
  private _password: string;
  public server: string;
  protected consent: boolean;

  constructor(login: string = 'player') {
    this.#login = login;
  }

  static {
    Player.game = setName();
  }

  get password() {
    return this._password;
  }

  set password(newPassword: string) {
    // Validation
    this._password = newPassword;
  }

  static getGame() {
    return Player.game;
  }

  logIn = () => {
    return `Player ${this.#login} logged in`;
  };

  connect() {
    // Do smth
    return this;
  }

  isPro(): this is CompetitivePlayer {
    return this instanceof CompetitivePlayer;
  }
}

// const player = new Player('test');
// console.log(player.connect().logIn());
console.log(Player.getGame());

// const test = player.logIn;
// test();

class CompetitivePlayer extends Player {
  rank: number;

  checkLogin() {
    return this.logIn();
  }

  isConsented() {
    this.consent ? console.log('Consented') : console.log('Not consented');
  }
}

const player = new Player('test');
console.log(player.connect().logIn());

const player2 = new CompetitivePlayer('test2');
console.log(player2.connect().logIn());

const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer('test3');
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

// const player = new CompetitivePlayer();
// player.password = 'qsz1';
// player.server = 'EU';
// player.rank = 1;

// class User {
//   public email: string;
//   public name: string;

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// class User {
//   constructor(
//     public email: string,
//     public name: string,
//   ) {}
// }
