import 'firebase/auth';
import React, { useState, useContext } from 'react';
import { useFirebaseApp } from 'reactfire';
import httpService from 'api/axios-client';
import api from 'api/api';
import { AuthProvider } from 'api/provider/AuthProvider';

const LoginPage = () => {
  const [user, login] = useContext(AuthProvider);
  console.log({ user });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isEnabled = email.length > 0 && email.includes('@') && password.length >= 6;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    login({ email, password });
  };

  return (
    <div>
      x
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit} noValidate>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Correo Electronico"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Contraseña"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={!isEnabled}
                        className="btn btn-primary btn-user btn-block"
                      >
                        Iniciar Sesion
                      </button>
                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        ¿No tienes un cuenta? Registrate gratis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
