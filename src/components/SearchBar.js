import React, { useState } from 'react';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';

export const SearchBar = ({ iconContent, buttonContent, handleSubmit }) => {
  const [searchParam, setSearchParam] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  const onSubmit = (ev) => {
    ev.preventDefault();
    handleSubmit({
      searchParam,
      category,
      city,
    });
  };

  return (
    <form onSubmit={onSubmit} noValidate autoCapitalize="off" className="search-job">
      <div className="row">
        <div className="col-md">
          <div className="form-group">
            <div className="form-field">
              <div className="icon">{iconContent}</div>
              <input
                type="text"
                className="form-control"
                maxLength="25"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="ej. Diseñador, Programador Java ..."
              />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="form-group">
            <div className="form-field">
              <div className="select-wrap">
                <div className="icon">
                  <span className="ion-ios-arrow-down" />
                </div>
                <select
                  name="selectCategory"
                  id="selectCategory"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Categoria</option>
                  <option value="">Full Time</option>
                  <option value="">Part Time</option>
                  <option value="">Freelance</option>
                  <option value="">Temporario</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="form-group">
            <div className="form-field">
              <div className="icon">
                <span className="icon-map-marker" />
              </div>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cuidad"
              />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="form-group">
            <div className="form-field">
              <Button
                type="submit"
                buttonStyle="form-control btn btn-primary"
                content={buttonContent}
                iconClass="fa fa-search"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

SearchBar.prototype = {
  iconContent: PropTypes.any.isRequired,
  buttonContent: PropTypes.string.isRequired,
};
