import React, { useState } from 'react';
import { SearchBar } from 'components/SearchBar';
import { DashboardList } from 'components/DashboardList';
export const Dashboard = () => {
  const searchResults = (seachFormValues) => {
    console.log({ seachFormValues });
  };
  return (
    <div className="ftco-search">
      <div className="row">
        <div className="col-md-12 nav-link-wrap d-flex justify-content-center">
          <div
            className="nav nav-pills text-center"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active mr-md-1"
              id="v-pills-1-tab"
              data-toggle="pill"
              href="#v-pills-1"
              role="tab"
              aria-controls="v-pills-1"
              aria-selected="true"
            >
              Buscar Empleo
            </a>

            <a
              className="nav-link"
              id="v-pills-2-tab"
              data-toggle="pill"
              href="#v-pills-2"
              role="tab"
              aria-controls="v-pills-2"
              aria-selected="false"
            >
              Buscar Candidato
            </a>
          </div>
        </div>
        <div className="col-md-12 tab-wrap">
          <div className="tab-content p-4" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-1"
              role="tabpanel"
              aria-labelledby="v-pills-nextgen-tab"
            >
              <SearchBar
                iconContent={<i className="fa fa-briefcase" aria-hidden="true" />}
                buttonContent="Buscar Empleo"
                handleSubmit={searchResults}
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-2"
              role="tabpanel"
              aria-labelledby="v-pills-performance-tab"
            >
              <SearchBar
                iconContent={<i className="fa fa-user-circle" aria-hidden="true" />}
                buttonContent="Buscar Candidato"
                handleSubmit={searchResults}
              />
            </div>
          </div>
        </div>
      </div>
      <DashboardList />
    </div>
  );
};
