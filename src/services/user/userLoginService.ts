import { sessionNameUserInfo } from '@/data/static-info';
import { api } from '@/lib/axios';
import { getToken } from '@/lib/getToken';
import { ResourceNotFound } from '../errors/resource-not-found';
import { UserAlreadyLoggedIn } from '../errors/user-already-logged-in';
import {
  UserCredentialsDTO,
  UserLoginResponse,
} from '../interfaces/IUserLoginService';

const UserLoginService = () => {
  const login = async (data: UserCredentialsDTO) => {
    if (!data.email.trim() || !data.password.trim()) {
      throw new ResourceNotFound();
    }

    const sessionCookie = getToken();

    if (sessionCookie) {
      throw new UserAlreadyLoggedIn();
    }

    const response = await api.post<UserLoginResponse>('/auth/login', {
      email: data.email,
      password: data.password,
      type: data.type,
    });

    return response;
  };

  const logout = () => {
    localStorage.removeItem(sessionNameUserInfo);
    sessionStorage.removeItem(sessionNameUserInfo);
  };

  return {
    login,
    logout,
  };
};

export default UserLoginService;
