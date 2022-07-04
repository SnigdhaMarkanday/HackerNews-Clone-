import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Routes } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export 'Redirect';
//export Redirect;
export default AppRouter;