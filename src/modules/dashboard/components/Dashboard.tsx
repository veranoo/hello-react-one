import React from 'react';
import { Link } from 'react-router-dom';
import { PageProps } from '@shared';

export const Dashboard: React.FC<PageProps> = ({ children, history }) => {
  return (
    <>
      <div>Dashboard</div>
      <ul>
        <li>
          <Link to='/dashboard/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/dashboard/photos'>Photos</Link>
        </li>
      </ul>
      {children}
    </>
  );
};
