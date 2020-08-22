import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <img width={100} src={Logo} alt='' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
      {children}
    </>
  );
};
