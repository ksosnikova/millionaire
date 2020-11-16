import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
export const Button = ({ text, path }) => {

  return (
    <NavLink to={path} className='btn'>{text}</NavLink>
  );
}

NavLink.PropTypes = {
  text: PropTypes.string,
  path: PropTypes.string
}

