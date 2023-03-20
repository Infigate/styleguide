import React from 'react';
import styled from 'styled-components';
import Colors from 'lib/Colors';
import * as Common from 'components/commons/Index';
import { Link } from 'react-router-dom';

const LinkStyle = styled(Link)<{}>`
  position: fixed;
  height: 1.5rem;
`;

const Wrap = styled.div``;

interface FullScreenLayoutProps {
  children: any;
}

export const FullScreenLayout: React.FC<FullScreenLayoutProps> = (
  props: FullScreenLayoutProps
) => {
  const { children } = props;
  return (
    <>
      <LinkStyle to={'/pages'}>
        <Common.VStack padding="1rem">
          <Common.Badge theme="info">back</Common.Badge>
        </Common.VStack>
      </LinkStyle>
      <Wrap>{children}</Wrap>
    </>
  );
};

export default FullScreenLayout;
