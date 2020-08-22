import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Post } from '../interfaces/Post';
import { useQuery } from 'react-query';
import { Spin } from 'antd';
import { request } from '@shared';

export const Posts: React.FC = ({ children }) => {
  const { data: posts, isFetching } = useQuery('POSTS', () => {
    return request<Post[]>('https://jsonplaceholder.typicode.com/posts');
  });

  return (
    <Spin spinning={isFetching}>
      <h2>Posts</h2>

      <ol>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/dashboard/posts/${post.id}`}>{post.body}</Link>
            </li>
          );
        })}
      </ol>

      <Outlet />
    </Spin>
  );
};
