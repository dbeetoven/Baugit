import React, { useState } from 'react';

export const ProfileForm = (props) => {
  const { user } = props;
  const [username, setUsername] = useState(user.email.substring(0, user.email.indexOf('@')));
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [occupation, setOccupation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [biography, setBiography] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.submit({
      uid: user.uid,
      email: user.email,
      username,
      lastname,
      company,
      name,
      city,
      country,
      postalCode,
      biography,
      occupation,
    });
  };

  return (
    <form className="user" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="form-group col-lg-3 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputUsername"
            value={username}
            readOnly
            onChange={(e) => setUsername(e.target.value)}
            maxLength="15"
            placeholder="Usuario"
          />
        </div>
        <div className="form-group col-lg-5 col-md-6 col-xs-12">
          <input
            type="email"
            className="form-control form-control-user"
            id="inputCorreo"
            value={user.email}
            readOnly
            placeholder="Correo"
          />
        </div>
        <div className="form-group col-lg-4 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputName"
            value={company}
            aria-describedby="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Empresa "
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputLastName"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Apellido"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputOcupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="Ocupación"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="Inputaddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Direccion "
          />
        </div>
        <div className="form-group col-lg-4 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Cuidad"
          />
        </div>
        <div className="form-group col-lg-4 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="InputCountry"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Pais"
          />
        </div>
        <div className="form-group col-lg-4 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputPostalCode"
            maxLength="10"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Codigo Postal "
          />
        </div>
        <div className="form-group col-12">
          <textarea
            className="form-control"
            id="inputTextBiography"
            placeholder="Biografia"
            rows="5"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            maxLength="500"
          />
        </div>
        <div className="form-group col-md-6 offset-md-3">
          <button className="btn btn-primary btn-user btn-block">Editar</button>
        </div>
      </div>
    </form>
  );
};
