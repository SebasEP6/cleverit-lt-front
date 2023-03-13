import { IUser } from "./user";

export interface IAccount {
  id: string;
  number: string;
  user: IUser;
  type: IAccountType;
  total: number;
}

export interface IAccountType {
  id: string;
  name: string;
}