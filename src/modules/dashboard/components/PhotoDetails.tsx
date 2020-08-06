import React from 'react';
import { Spin } from 'antd';
import { PageProps } from '@shared';
import { Photo } from '../interfaces/Photo';
import { useQuery } from 'react-query';
import { request } from '@shared';

export const PhotoDetails: React.FC<PageProps> = ({ match }) => {
  const { isFetching, data: photo } = useQuery('PHOTO_DETAILS', () => {
    return request<Photo>(
      'https://jsonplaceholder.typicode.com/photos/' + match.params.photoId
    );
  });

  return (
    <Spin spinning={isFetching}>
      <h3>{photo?.title}</h3>
      <a href={photo?.url}>{photo?.url}</a>
      <div>
        <img src={photo?.thumbnailUrl} alt='' />
      </div>
    </Spin>
  );
};
