import { IAccountType } from "./account";
import { IUser } from "./user";

export interface IUserLogin {
  dni: string;
  password: string;
}

export interface INewAccount {
  accountType: IAccountType;
  user?: IUser;
}