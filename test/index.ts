type Currencies = {
  usa: 'USD';
  euro: 'EUR';
  yen: 'JPY';
  ukraine: 'UAH';
};

type CreateCustomCurr<T> = {
  [P in keyof T as `cutom${Capitalize<string & P>}`]: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type MyAnimation = 'fade' | 'swipe';
type Direction = 'In' | 'Out';

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
