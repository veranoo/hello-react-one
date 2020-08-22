import React from 'react';
import { Spin } from 'antd';
import { Photo } from '../interfaces/Photo';
import { useQuery } from 'react-query';
import { DetailsModal, request } from '@shared';
import { useParams } from 'react-router-dom';

export const PhotoDetails: React.FC = () => {
  const { photoId } = useParams();
  const { isFetching, data: photo } = useQuery('PHOTO_DETAILS', () => {
    return request<Photo>(
      'https://jsonplaceholder.typicode.com/photos/' + photoId
    );
  });

  return (
    <DetailsModal>
      <Spin spinning={isFetching}>
        <h3>{photo?.title}</h3>
        <a href={photo?.url}>{photo?.url}</a>
        <div>
          <img src={photo?.thumbnailUrl} alt='' />
        </div>
      </Spin>
    </DetailsModal>
  );
};
