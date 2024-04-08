function setName() {
  return 'Hello';
}

class Player {
  private static game: string;

  #login: string;
  private _password: string;
  public server: string;
  protected consent: boolean;

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
}

new Player();
new Player();
new Player();
console.log(Player.getGame());

class CompetitivePlayer extends Player {
  rank: number;

  isConsented() {
    this.consent ? console.log('Consented') : console.log('Not consented');
  }
}

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
