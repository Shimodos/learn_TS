type Currencies = {
  usa: 'USD';
  euro: 'EUR';
  yen: 'JPY';
  ukraine: 'UAH';
};

type CurrWithoutUSA = Omit<Currencies, 'usa'>; // Исключаем из типа Currencies ключ 'usa'
type CurrWithoutUSAAndUkraine = Pick<Currencies, 'usa' | 'ukraine'>; // Фильтрация по свойствам
type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>; // Исключаем из ключей типа Currencies ключ 'usa'
type FadeType = Exclude<MyAnimation, 'swipe'>; // Исключаем из типа MyAnimation значение 'swipe'
type SwipeType = Extract<MyAnimation | Direction, 'swipe'>; // Извлекаем из типа MyAnimation значение 'swipe'

type CreateCustomCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = 'Messi' | 'Ronaldo';
type CustomCurrencies = CreateCustomCurr<Currencies>;
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

const gameData: GameDataCurr = {
  Messi: {
    customUsa: 'USD',
    customEuro: 'EUR',
    customYen: 'JPY',
    customUkraine: 'UAH',
  },
  Ronaldo: {
    customUsa: 'USD',
    customEuro: 'EUR',
    customYen: 'JPY',
    customUkraine: 'UAH',
  },
};

type MyAnimation = 'fade' | 'swipe';
type Direction = 'In' | 'Out';

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
