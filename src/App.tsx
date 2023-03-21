import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimateRoutes from 'AnimateRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AnimateRoutes />
    </Router>
  );
};

export default App;
