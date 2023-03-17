import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import * as Common from 'components/commons/Index';

const LoginSunset: React.FC = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Common.Typography type="h1" text="Pages" margin="0 0 2rem 0" />
      <Common.Typography type="h2" text="Login Screen" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center">
        <Common.Card
          background="img/gallery/cat.png"
          width="33%"
          height="300px"
          onClick={() => navigate('/pages/login/sunset')}
        />

        <Common.Card
          background="img/gallery/unicorn.png"
          width="33%"
          height="300px"
        />
      </Common.HStack>
    </MainLayout>
  );
};

export default LoginSunset;