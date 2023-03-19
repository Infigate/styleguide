import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Common from 'components/commons/Index';
import Colors from 'lib/Colors';

const Top: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout myKey="top">
      <Common.Typography
        type="h1"
        text="React + TypeScript Style Guide"
        margin="0 0 2rem 0"
        color={Colors('White')}
      />
      <Common.HStack gap="1rem" align="center">
        <Common.Card
          background="img/gallery/cat.png"
          width="50%"
          height="300px"
          onClick={() => navigate('/pages')}
        >
          <Common.Typography
            type="h2"
            text="Pages"
            margin="6rem 2rem"
            color={Colors('White')}
            align="center"
          />
        </Common.Card>
        <Common.Card
          background="img/gallery/unicorn.png"
          width="50%"
          height="300px"
          onClick={() => navigate('/components')}
        >
          <Common.Typography
            type="h2"
            text="Components"
            margin="6rem 2rem"
            color={Colors('White')}
            align="center"
          />
        </Common.Card>
      </Common.HStack>
    </MainLayout>
  );
};

export default Top;
