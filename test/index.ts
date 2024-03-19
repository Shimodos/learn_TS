interface ICompany {
  name: string;
  dabts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'dabts';

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, dabts: S) {
  console.log(`Company ${company[name]} has ${company[dabts]} debts`);
}

const hh: ICompany = {
  name: 'hh',
  dabts: 100,
};

printDebts(hh, 'name', 'dabts');

const google = {
  name: 'Google',
  open: '1998',
};

printDebts(google, 'name', 'open');
