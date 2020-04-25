import React, { useState } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

export const SearchBar = ({ handleSearch, size = 'large' }) => (
  <Search
    placeholder="input search text"
    enterButton="Search"
    size={size}
    onSearch={(value) => handleSearch(value)}
  />
);

// SearchBar.prototype = {
//   iconContent: PropTypes.any.isRequired,
//   buttonContent: PropTypes.string.isRequired,
// };
