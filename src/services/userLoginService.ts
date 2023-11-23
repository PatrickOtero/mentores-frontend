import {
  IUserLoginService,
  UserLoginDTO,
} from "./interfaces/IUserLoginService";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "./axios";

const userLoginService = (): IUserLoginService => {

  const router = useRouter()
  const [countError, setCountError] = useState(0);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    type: "",
    errors: "",
  });
    
  const sendLogin = async (data: UserLoginDTO, userType: string) => {

    console.log(userType)

    if (typeof userType == "string") {
    data.type = userType
    }

    console.log(data)
    await validateForm(data)
    try {
      const response = await api.post("/auth/login", data);

      setFormState({
        ...formState,
        errors: ""
      })
      if (response.data.token) {
        router.push('/genericPage')
      }
    } catch (error: any) {
      console.log(error.response.data.message[0])
      setFormState({
        ...formState,
        errors:"*E-mail ou senha incorretos."
      })
      // setCountError(countError + 1)
      // console.log(countError)
    }
  };

  const validateForm = async(data:UserLoginDTO):Promise<boolean> => { 
    if(!data.email || !data.password){
      setFormState({
        ...formState,
        errors:"*E-mail ou senha incorretos."
      })
      return false
    }else {
      return true
    }   
  }

  return { sendLogin, validateForm, formState, countError};
};


export default userLoginService