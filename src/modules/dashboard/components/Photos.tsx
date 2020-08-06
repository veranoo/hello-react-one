import React from 'react';
import { Link } from 'react-router-dom';
import { PageProps, request } from '@shared';
import { Photo } from '@dashboard';
import { useQuery } from 'react-query';
import { Spin } from 'antd';

export const Photos: React.FC<PageProps> = ({ children }) => {
  const { data: photos, isFetching } = useQuery(
    'PHOTOS',
    () => {
      return request<Photo[]>('https://jsonplaceholder.typicode.com/photos');
    },
    {
      refetchOnWindowFocus: false
    }
  );

  return (
    <Spin spinning={isFetching}>
      <h2>Photos</h2>
      <ol>
        {photos?.map((photo) => {
          return (
            <li key={photo.id}>
              <Link to={`/dashboard/photos/${photo.id}`}>{photo.title}</Link>
            </li>
          );
        })}
      </ol>

      {children}
    </Spin>
  );
};
