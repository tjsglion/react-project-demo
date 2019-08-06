import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
const { Suspense, lazy } = React;
// import Index from '@components/Index';
const Index = lazy(() =>
  import(/* webpackChunkName: "index" */ '@components/Index')
);

// 定义路由属性接口
interface Props extends RouteProps {
  auth?: boolean;
}

const routes: Props[] = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Index
  }
];

console.log(Index);
