import React, { useEffect, useState } from 'react';
import httpClient from 'api/axios-client';
import API_URL from 'api/api';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { addDays } from 'date-fns';

export const JobPost = (props) => {
  const { jobCategories, jobTypes } = props;
  const [locations, setLocations] = useState([]);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [jobSkills, setJobSkills] = useState('');
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [jobCaterory, setJobCategory] = useState('');
  const [closingDate, setCLosingDate] = useState(addDays(new Date(), 90));
  const [description, setDescription] = useState('');

  useEffect(() => {
    httpClient
      .get(API_URL.PROVINCES)
      .then((response) => setLocations(_formatLocation(response.data.provincias)))
      .catch((err) => console.error(err));
  }, []);

  const _formatLocation = (locations) => {
    return locations.map((p) => {
      p['label'] = p['nombre'];
      p['value'] = Number(p['id']);
      
      return p;
    });
  };
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="user" onSubmit={handleSubmit} noValidate>
      <div className="row">

        <div className="form-group col-lg-4 col-md-8 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength="50"
            placeholder="Ej: Programador Java,Titulo"
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-xs-12">
          <input
            type="email"
            className="form-control form-control-user"
            id="inputCorreo"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Correo de contacto"
          />
        </div>
        <div className="form-group col-lg-4 col-md-6 col-xs-12">
          <input
            type="phone"
            className="form-control form-control-user"
            id="inputPhone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="Telefono de Contacto"
          />
        </div>

        <div className="form-group col-lg-3 col-md-6 col-xs-12">
          <Select
            placeholder="Cuidad"
            options={locations}
            selected={location}
            onChange={(l) => setLocation(l.value)}
          />
        </div>
        <div className="form-group col-lg-3 col-md-6 col-xs-12">
          <Select
          placeholder="Categoria"
            options={jobCategories}
            value={jobCaterory}
            onChange={(e) => setJobCategory(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-3 col-md-6 col-xs-12">
        <Select
          placeholder="Tipo de contatacion"
            options={jobCategories}
            value={jobType}
            onChange={(e) => setJobCategory(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-3 col-md-6 col-xs-12">
          <DatePicker
            selected={closingDate}
            minDate={new Date()}
            maxDate={addDays(new Date(), 90)}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setCLosingDate(date)}
            placeholder="Seleccione una fecha."
          />
        </div>
 
        <div className="form-group col-lg-9 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="input Task"
            value={jobSkills}
            onChange={(e) => setJobSkills(e.target.value)}
            placeholder="Tecnologias"
          />
        </div>
        <div className="form-group col-lg-3 col-md-6 col-xs-12">
          <input
            type="text"
            className="form-control form-control-user"
            id="inputSalary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Remuneracion"
          />
        </div>
        <div className="form-group col-12">
          <textarea
            className="form-control"
            id="inputTextBiography"
            placeholder="Descripcion"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="500"
          />
        </div>
        <div className="form-group col-md-6 offset-md-3">
          <button className="btn btn-primary btn-user btn-block">Cargar</button>
        </div>
      </div>
    </form>
  );
};
