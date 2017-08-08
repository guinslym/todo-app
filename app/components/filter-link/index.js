import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={ filter === 'all' ? '/' : '/' + filter }
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}>
    {children}
  </NavLink>
);

FilterLink.propTypes = propTypes;

export default FilterLink;
