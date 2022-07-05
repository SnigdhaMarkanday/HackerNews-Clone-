import React from 'react';
import { BrowserRouter, Route, Switch, Navigate, Routes } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/top" />} exact={true} />
          <Route
            path="/:type"
            element={<ShowStories />}
          />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
//export 'Redirect';
//export Redirect;
export default AppRouter;
