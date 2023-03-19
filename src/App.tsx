import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageLink } from 'lib/Constants';
import { SnackBarContextProvider } from './context/SnackBarContextProvider';
import * as pages from 'pages/Index';
import * as Common from 'components/commons/Index';

const App: React.FC = () => {
  return (
    <Router basename="/">
      <SnackBarContextProvider>
        <Common.SnackBarWrapper />
        <Routes>
          <Route path={PageLink.Top} element={<pages.Top />} />
          <Route path={PageLink.Pages.index} element={<pages.Pages />} />
          <Route
            path={PageLink.Pages.sunset}
            element={<pages.PagesLoginSunset />}
          />
          <Route path={PageLink.Components} element={<pages.Components />} />
          <Route path={PageLink.Login} element={<pages.Login />} />
        </Routes>
      </SnackBarContextProvider>
    </Router>
  );
};

export default App;
