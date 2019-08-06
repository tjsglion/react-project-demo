import * as React from 'react';
import {Route, Switch, RouteProps, Redirect} from 'react-router-dom';
const { Suspense, lazy } = React;
// import Index from '@components/Index';
const Index = lazy(() => import(/* webpackChunkName: "index" */ "@components/Index"))