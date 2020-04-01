import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Profile extends Component {
  componentDidMount() {
    console.log('Componente did mount call get user data');
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-md-8 col-xs-12">
          <div className="card">
            <div className="card-body">
              <form className="user" noValidate>
                <div className="row">
                  <div className="form-group col-lg-4 col-md-6 col-xs-12">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="inputName"
                      aria-describedby="emailHelp"
                      placeholder="Empresa "
                    />
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-xs-12">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="inputUsername"
                      maxLength="15"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="form-group col-lg-5 col-md-6 col-xs-12">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="inputCorreo"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="inputName"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="inputLastName"
                      placeholder="Apellido"
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                      <input type="checkbox" className="custom-control-input" id="customCheck" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-8">
          <div className="card">
            <img
              className="card-img-top"
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
              alt="Bologna"
            />
            <div className="card-body text-center">
              {/* <img
                class="avatar rounded-circle"
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                alt="Bologna"
              /> */}
              <h4 className="card-title">Robert Downey Jr.</h4>
              <h6 className="card-subtitle mb-2 text-muted">Famous Actor</h6>
              <p className="card-text">
                Robert John Downey Jr.'career has included critical and popular success in his
                youth, followed by a period of substance abuse and legal difficulties, and a
                resurgence of commercial success in middle age.{' '}
              </p>
              <Link to="#" className="btn btn-circle btn-danger">
                <i className="fab fa-google fa-fw"></i>
              </Link>
              <Link to="#" className="btn btn-primary">
                <i className="fab fa-facebook-f fa-fw"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
