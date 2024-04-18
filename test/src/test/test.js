"use strict";
class UserForm {
    login;
    password;
    validation = false;
    token;
    isValid(login) {
        return login.length > 4;
    }
}
new UserForm().isValid('test');
