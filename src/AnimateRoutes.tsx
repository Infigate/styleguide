import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageLink } from 'lib/Constants';
import { SnackBarContextProvider } from 'context/SnackBarContextProvider';
import * as pages from 'pages/Index';
import * as Common from 'components/commons/Index';
import { AnimatePresence } from 'framer-motion';

const AnimateRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <SnackBarContextProvider>
      <Common.SnackBarWrapper />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={PageLink.Top} element={<pages.Top />} />
          <Route path={PageLink.Pages.index} element={<pages.Pages />} />
          <Route
            path={PageLink.Pages.sunset}
            element={<pages.PagesLoginSunset />}
          />
          <Route path={PageLink.Components} element={<pages.Components />} />
          <Route path={PageLink.Login} element={<pages.Login />} />
        </Routes>
      </AnimatePresence>
    </SnackBarContextProvider>
  );
};

export default AnimateRoutes;
