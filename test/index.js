"use strict";
class Player {
    #login;
    _password;
    server;
    consent;
    get password() {
        return this._password;
    }
    set password(newPassword) {
        // Validation
        this._password = newPassword;
    }
}
const test = new Player();
class CompetitivePlayer extends Player {
    rank;
    isConsented() {
        this.consent ? console.log('Consented') : console.log('Not consented');
    }
}
const player = new CompetitivePlayer();
player.password = 'qsz1';
player.server = 'EU';
player.rank = 1;
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
