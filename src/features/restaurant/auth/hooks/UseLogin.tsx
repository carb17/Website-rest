import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { LoginService } from '../services/authService';

export function useLogin() {
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (user: string, password: string) => {
    setMensaje('');

    try {
      const data = await LoginService(user, password);

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', user);
        setMensaje('Inicio de sesión exitoso ✅');
        navigate('/Home');
      } else {
        setMensaje('Credenciales incorrectas.');
      }
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);

      const mensajeError =
        error.message || error.response?.data?.message || 'Ocurrió un error';
      setMensaje(mensajeError);
    }
  };

  return { handleLogin, mensaje };
}
