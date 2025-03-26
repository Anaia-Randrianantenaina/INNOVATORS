import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={login}>Se connecter</button>
    </div>
  );
};

export default Login;
