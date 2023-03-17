import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageLink } from 'lib/Constants';
import * as pages from 'pages/Index';

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
