import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About } from './modules/about/components/About';
import { Home } from './modules/home/components/Home';
import { NotFound } from './modules/not-found/components/NotFound';
import { DetailsModal, Layout, RecursiveRoute, RecursiveRoutes } from '@shared';
import {
  Dashboard,
  PhotoDetails,
  Photos,
  PostDetails,
  Posts
} from '@dashboard';

const routes: RecursiveRoute[] = [
  {
    path: '/',
    exact: true,
    redirectTo: '/dashboard',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    redirectTo: '/dashboard/posts',
    routes: [
      {
        path: '/dashboard/posts',
        component: Posts,
        routes: [
          {
            path: '/dashboard/posts/:postId',
            component: DetailsModal,
            data: {
              input: PostDetails
            }
          }
        ]
      },
      {
        path: '/dashboard/photos',
        component: Photos,
        routes: [
          {
            path: '/dashboard/photos/:photoId',
            component: DetailsModal,
            data: {
              input: PhotoDetails
            }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  }
];

export default () => (
  <BrowserRouter>
    <Layout>
      <RecursiveRoutes routes={routes} />
    </Layout>
  </BrowserRouter>
);
