import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout } from '@shared';

export const Dashboard: React.FC = ({ children }) => {
  return (
    <Layout>
      <div>Dashboard</div>
      <ul>
        <li>
          <Link to='/dashboard/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/dashboard/photos'>Photos</Link>
        </li>
      </ul>
      <Outlet />
    </Layout>
  );
};
