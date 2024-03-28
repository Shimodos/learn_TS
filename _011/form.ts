interface IForm {
  login: string;
  password: string;
  test: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: ValidationData<IForm> = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true },
  test: { isValid: false, errorMsg: 'At least 5 characters' },
};

type ValidationData<T> = {
  [P in keyof T]:
    | {
        isValid: boolean;
      }
    | {
        isValid: false;
        errorMsg: string;
      };
};
