interface ICompany {
  name: string;
  dabts: number;
  departments: Department;
  managment: {
    owner: string;
  };
}

interface Department {
  [key: string]: string;
}

let debts = 'dabts' as const;
type CompanyDebtsType = ICompany[typeof debts]; // Indexed Access Types

// type CompanyDebtsType = ICompany['dabts']; // Indexed Access Types
type CompanyOwnerType = ICompany['managment']['owner']; // Indexed Access Types
type CompanyDepartmentsType = ICompany['departments'][number]; // Indexed Access Types
type CompanyDepartmentsTypes = ICompany['departments']; // Indexed Access Types
type Test = ICompany[keyof ICompany]; // Union Types

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'dabts';

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, dabts: S) {
  console.log(`Company ${company[name]} has ${company[dabts]} debts`);
}

const hh: ICompany = {
  name: 'hh',
  dabts: 100,
  departments: {
    sales: 'Sales',
    marketing: 'Marketing',
  },
  managment: {
    owner: 'Larry Page',
  },
};

printDebts(hh, 'name', 'dabts');

const google: ICompany = {
  name: 'Google',
  dabts: 100,
  departments: {
    sales: 'Sales',
    marketing: 'Marketing',
  },
  managment: {
    owner: 'Larry Page',
  },
};

printDebts(google, 'name', 'dabts');

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'dabts';
