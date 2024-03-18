const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['qwert'];
// roarr[0] = 'reewq'; // error

interface IState {
  readonly data: {
    name: string;
  };
  tag?: string;
}

const state: Partial<IState> = {
  data: {
    name: 'John',
  },
};

const strictState: Required<IState> = {
  data: {
    name: 'Alex',
  },
  tag: 'test',
};

strictState.data = '2232';

function action(state: Readonly<IState>) {
  state.data.name = 'test';
}
