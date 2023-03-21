import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageLink } from 'lib/Constants';
import { SnackBarContextProvider } from 'context/SnackBarContextProvider';
import * as pages from 'pages/Index';
import * as Common from 'components/commons/Index';
import { AnimatePresence } from 'framer-motion';

const AnimateRoutes: React.FC = () => {
  const location = useLocation();
  const URL = process.env.PUBLIC_URL;

  return (
    <SnackBarContextProvider>
      <Common.SnackBarWrapper />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={URL + PageLink.Top} element={<pages.Top />} />
          <Route path={URL + PageLink.Pages.index} element={<pages.Pages />} />
          <Route
            path={URL + PageLink.Pages.sunset}
            element={<pages.PagesLoginSunset />}
          />
          <Route
            path={URL + PageLink.Components}
            element={<pages.Components />}
          />
          <Route path={URL + PageLink.Login} element={<pages.Login />} />
          <Route path="*" element={<pages.Top />} />
        </Routes>
      </AnimatePresence>
    </SnackBarContextProvider>
  );
};

export default AnimateRoutes;
