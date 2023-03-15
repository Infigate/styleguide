import MainLayout from 'layouts/MainLayout';
import React from 'react';
import * as Common from 'components/commons/Index';
import Colors from 'lib/Colors';

const Top: React.FC = () => {
  return (
    <MainLayout>
      <Common.Typography
        type="h1"
        text="React + TypeScript Style Guide"
        margin="0 0 1.5rem 0"
        color={Colors.White}
      />
      <Common.Card
        background="img/gallery/unicorn.png"
        width="450px"
        height="300px"
      >
        <Common.Typography
          type="h2"
          text="pages"
          margin="6rem 2rem"
          color={Colors.White}
          align="center"
        />
      </Common.Card>
    </MainLayout>
  );
};

export default Top;
