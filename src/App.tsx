import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  RouteComponentProps,
  Switch,
  Redirect
} from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

const Dashboard: React.FC = ({ children }) => {
  return (
    <>
      <div>Dashboard</div>
      <ul>
        <li>
          <Link to='/dashboard/posts'>Posts</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

const About: React.FC = ({ children }) => {
  return (
    <>
      <div>About</div>
      {children}
    </>
  );
};

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <>
      <div>Posts</div>
      <ul>
        <li>
          <Link to='/dashboard/posts/details'>Details</Link>
        </li>
        <li>
          <Link to='/dashboard/posts/info'>Info</Link>
        </li>
      </ul>

      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/dashboard/posts/${post.id}`}>{post.body}</Link>
            </li>
          );
        })}
      </ol>

      {children}
    </>
  );
};

interface RecursiveRoute {
  routes?: RecursiveRoute[];
  exact?: boolean;
  component?: React.FC<RouteComponentProps<any>>;
  path?: string;
  redirectTo?: string;
}

const Details: React.FC<RouteComponentProps> = ({ match }) => {
  useEffect(() => {
    return () => {
      debugger;
    };
  }, []);
  return <div>Details</div>;
};
const Info: React.FC<RouteComponentProps> = () => <div>Info</div>;

const NotFound = () => {
  return <div>Not found</div>;
};

const Home = () => {
  return <div>Home</div>;
};

const routes: RecursiveRoute[] = [
  {
    path: '/',
    exact: true,
    redirectTo: '/home'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [
      {
        path: '/dashboard/posts',
        component: Posts,
        routes: [
          {
            path: '/dashboard/posts/:postId',
            component: Details
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

interface RecursiveRouteProps {
  routes?: RecursiveRoute[];
}

const RecursiveRoutes: React.FC<RecursiveRouteProps> = ({ routes }) => {
  return (
    <Switch>
      {routes?.map(({ routes, component: Component, redirectTo, ...rest }) => {
        return (
          <Route
            {...rest}
            key={rest.path}
            render={(props) => {
              if (redirectTo) {
                return <Redirect to={redirectTo} />;
              } else if (Component) {
                return (
                  <Component {...props}>
                    <RecursiveRoutes routes={routes} />
                  </Component>
                );
              } else {
                return null;
              }
            }}
          />
        );
      })}
    </Switch>
  );
};

export default () => (
  <BrowserRouter>
    <Layout>
      <RecursiveRoutes routes={routes} />
    </Layout>
  </BrowserRouter>
);
