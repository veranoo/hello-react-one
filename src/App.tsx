import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { About } from './modules/about/components/About';
import { Home } from './modules/home/components/Home';
import { NotFound } from './modules/not-found/components/NotFound';
import {
  Dashboard,
  PhotoDetails,
  Photos,
  PostDetails,
  Posts
} from '@dashboard';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<NotFound />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route path='' element={<Navigate to='posts' />} />
        <Route path='posts' element={<Posts />}>
          <Route path=':postId' element={<PostDetails />} />
        </Route>
        <Route path='photos' element={<Photos />}>
          <Route path=':photoId' element={<PhotoDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
