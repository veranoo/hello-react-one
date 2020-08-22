import React from 'react';
import { Post } from '../interfaces/Post';
import { Spin } from 'antd';

import { useQuery } from 'react-query';
import { DetailsModal, request } from '@shared';
import { useParams } from 'react-router-dom';

export const PostDetails: React.FC = () => {
  const { postId } = useParams();
  const { data: post, isFetching } = useQuery('key', () => {
    return request<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    );
  });

  return (
    <DetailsModal>
      <Spin spinning={isFetching}>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </Spin>
    </DetailsModal>
  );
};
