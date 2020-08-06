import React from 'react';
import { PageProps } from './PageProps';

export interface RecursiveRoute {
  routes?: RecursiveRoute[];
  exact?: boolean;
  data?: Record<string, any>;
  component?: React.FC<PageProps<any>>;
  path?: string;
  redirectTo?: string;
}
