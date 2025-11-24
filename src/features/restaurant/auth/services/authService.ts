import { USERS_ENDPOINT } from '../../../../lib/apiConfig';

import { InstanciaAxios } from '../../../../lib/axios';

import { LoginProps } from '../types/types';

export const LoginService = async (user: string, password: string) => {
  if (!user || !password) {
    throw new Error('Usuario y contraseña son obligatorios');
  }

  try {
    const response = await InstanciaAxios.post<LoginProps>(
      USERS_ENDPOINT.login,
      {
        user,
        password,
      }
    );
    return response.data;
  } catch (error: any) {
    const mensaje = error?.response?.data?.message || 'Error al iniciar sesión';
    throw new Error(mensaje);
  }
};
