import { Dispatch, SetStateAction } from "react";

export interface IUserLoginService {
  sendLogin: (data: UserLoginDTO, userType: string) => Promise<void>;
  validateForm: (data: UserLoginDTO) => Promise<boolean>;
  formState:{
    email:string,
    password:string,
    type: string
    errors:string
  };
  countError: number;
}

export type UserLoginDTO = {
  email: string;
  password: string;
  type: string;
};
