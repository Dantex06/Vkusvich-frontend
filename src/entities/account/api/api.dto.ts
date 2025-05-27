export interface Role {
  id: number;
  name: string;
}

export interface Account {
  id: number;
  isBlocking: boolean;
  name: string;
  role: Role;
}
