import React from 'react';
import { Link } from 'react-router-dom';
const SidebarItems = (props) => {
  const { title, subtitle,control, childrens } = props;

  return (
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls={control}
      >
        <i className="fas fa-fw fa-wrench"></i>
        <span>{title}</span>
      </a>
      <div
        id={control}
        className="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">{subtitle}</h6>
          {childrens.map((child, index) => {
            <Link key={index} className="collapse-item" to="/">
              {child.title}
            </Link>;
          })}
        </div>
      </div>
    </li>
  );
};

export default SidebarItems;