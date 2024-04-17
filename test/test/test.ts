interface IUser {
  login: string;
  password: string;
  token?: string;
}

interface IValidation {
  validation: boolean;
  isValid: (data: string) => boolean;
}

class UserForm implements IUser, IValidation {
  login: string;
  password: string;
  validation = false;
  token?: string | undefined;

  isValid(login: string) {
    return login.length > 4;
  }
}

new UserForm().isValid('test');
