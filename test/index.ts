type FromPromise = Awaited<Promise<number>>; // string

interface User {
  name: string;
  age: number;
}

async function getUser(): Promise<User[]> {
  const users: User[] = [{ name: 'John', age: 30 }];
  return users;
}

const users = getUser(); // Promise<User[]>

type FetchUsersReturnType = Awaited<ReturnType<typeof getUser>>; // User[]

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type UnwrappedPromiseType = UnwrappedPromise<ReturnType<typeof getUser>>; // User[]
