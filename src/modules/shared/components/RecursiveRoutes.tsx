import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RecursiveRoute } from '..';

interface RecursiveRouteProps {
  routes?: RecursiveRoute[];
}

export const RecursiveRoutes: React.FC<RecursiveRouteProps> = ({ routes }) => {
  return (
    <Switch>
      {routes?.map(
        ({ routes, component: Component, data, redirectTo, ...rest }) => {
          return (
            <Route
              {...rest}
              key={rest.path}
              render={(props) => {
                return (
                  <>
                    {redirectTo && (
                      <Redirect
                        to={{
                          pathname: redirectTo
                        }}
                      />
                    )}
                    {Component && (
                      <Component {...props} data={data}>
                        {routes?.length && <RecursiveRoutes routes={routes} />}
                      </Component>
                    )}
                  </>
                );
              }}
            />
          );
        }
      )}
    </Switch>
  );
};
