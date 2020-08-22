import React from 'react';

export interface RecursiveRoute {
  routes?: RecursiveRoute[];
  exact?: boolean;
  data?: Record<string, any>;
  component?: React.FC;
  path?: string;
  redirectTo?: string;
}
