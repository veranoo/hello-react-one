import React from 'react';
import { Post } from '../interfaces/Post';
import { Spin } from 'antd';
import { PageProps } from '@shared';

import { useQuery } from 'react-query';
import { request } from '@shared';

export const PostDetails: React.FC<PageProps> = ({ match }) => {
  const { data: post, isFetching } = useQuery('key', () => {
    return request<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + match.params.postId
    );
  });

  return (
    <Spin spinning={isFetching}>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </Spin>
  );
};
