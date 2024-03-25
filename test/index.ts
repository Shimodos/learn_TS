type Currencies = {
  usa: 'USD';
  euro?: 'EUR';
  yen: 'JPY';
  readonly ukraine: 'UAH';
};

type CreateCustomCurr<T> = {
  -readonly [key in keyof T]-?: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurencies = {
//   usa: string;
//   euro: string;
//   yen: string;
//   ukraine: string;
// };

// type  СопоставимыйТип = {
//   [ПроизвольныйИдентификатор in Множество] : ТипЗначения
//  };

type Keys = 'name' | 'age' | 'city';

type User = {
  [key in Keys]: string;
};

const alex: User = {
  name: 'Alex',
  age: '22',
  city: 'Kiev',
};
