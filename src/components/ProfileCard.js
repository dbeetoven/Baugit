import React from 'react';
import {Link} from 'react-router-dom';


 export const ProfileCard = (props) => {
  console.log(props);
  const {lastname,name,occupation, biography}=props.userData;
  
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
        alt="Bologna"
      />
      <div className="card-body text-center">
        <img
          class="avatar rounded-circle"
          src={props.user.photoURL}
          alt="Bologna"
        />
        <h4 className="card-title">{name,lastname}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{occupation}</h6>
        <p className="card-text">
        {biography}
        </p>
        <Link to="#" className="btn btn-circle btn-danger">
          <i className="fab fa-google fa-fw"></i>
        </Link>
        <Link to="#" className="btn btn-primary">
          <i className="fab fa-facebook-f fa-fw"></i>
        </Link>
        
      </div>
    </div>
  );
};
