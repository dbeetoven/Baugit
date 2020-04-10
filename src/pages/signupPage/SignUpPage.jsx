import React, { Component } from 'react';

export default class SignUp extends Component {
  // const handleForm = e => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(res => {
  //       if (res.user) Auth.setLoggedIn(true);
  //     })
  //     .catch(e => {
  //       setErrors(e.message);
  //     });
  // };
  render() {
    return (
      <div className="bg-gradient-primary">
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Crear Cuenta!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="Nombre"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleLastName"
                            placeholder="Apellido"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="correo electronico"
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Confirmar Password"
                          />
                        </div>
                      </div>
                      <a href="login.html" className="btn btn-primary btn-user btn-block">
                        Registrarse
                      </a>
                      <hr />
                      <a
                        href="#"
                        onClick="console.log('The link was clicked.'); return false"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" />
                        Registrate con Google
                      </a>
                      <a
                        href="#"
                        onClick="console.log('The link was clicked.'); return false"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw" />
                        Ingresar con Facebook
                      </a>
                    </form>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
