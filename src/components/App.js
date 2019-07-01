import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Reader/Loader/Loader';

const AsyncReaderPage = Loadable({
  loader: () => import('./Reader/Reader' /* webpackChunkName: "reader-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const App = () => (
  <div>
    <Switch>
      <Route path="/reader" component={AsyncReaderPage} />
      <Redirect from="/*" to="/reader" />
    </Switch>
  </div>
);

export default App;
