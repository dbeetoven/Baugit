import React, { useState } from 'react';
import { Input, Select } from 'antd';
import PropTypes from 'prop-types';

const { Search, Group, Option } = Input;

export const SearchBar = ({ handleSearch, size = 'large' }) => (
  <Group compact>
    <Select defaultValue="Profesional" style={{ width: '20%' }}>
      <Option value="Proyectos">Proyectos</Option>
      <Option value="Proyectos">Except</Option>
      <Option value="Proyectos">Except</Option>
    </Select>
    <Search
      placeholder="Buscar ..."
      enterButton="Search"
      style={{ width: '80%' }}
      onSearch={(value) => handleSearch(value)}
    />
  </Group>
);

// SearchBar.prototype = {
//   iconContent: PropTypes.any.isRequired,
//   buttonContent: PropTypes.string.isRequired,
// };
