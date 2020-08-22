import React from 'react';
import { Layout } from '@shared';

export const About: React.FC = ({ children }) => {
  return (
    <Layout>
      <div>About</div>
      {children}
    </Layout>
  );
};
