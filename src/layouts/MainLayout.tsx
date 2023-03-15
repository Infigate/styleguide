import React from 'react';
import styled from 'styled-components';
import { Colors } from 'lib/Colors';
import Sidebar from 'components/Sidebar';

const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 24rem 1fr;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 2rem;
  background: ${Colors.Background};
  margin-left: 250px;
  width: 100%;
`;

interface MainLayoutProps {
  children: any;
}

export const MainLayout: React.FC<MainLayoutProps> = (
  props: MainLayoutProps
) => {
  const { children } = props;
  return (
    <Wrapper>
      <Sidebar />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default MainLayout;
