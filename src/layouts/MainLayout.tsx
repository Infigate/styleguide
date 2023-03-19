import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Colors from 'lib/Colors';
import Sidebar from 'components/Sidebar';

const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 24rem 1fr;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 2rem;
  background: ${Colors('Background')};
  margin-left: 260px;
  width: 100%;
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
};

interface MainLayoutProps {
  children: any;
  myKey: string;
}

export const MainLayout: React.FC<MainLayoutProps> = (
  props: MainLayoutProps
) => {
  const { children } = props;
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.div>
      </Container>
    </Wrapper>
  );
};

export default MainLayout;
