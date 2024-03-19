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

const google: ICompany = {
  name: 'Google',
  dabts: 100,
};

printDebts(google, 'name', 'dabts');

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'dabts';
