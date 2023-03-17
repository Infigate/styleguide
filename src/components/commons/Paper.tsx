import React from 'react';
import styled from 'styled-components';
import Colors from 'lib/Colors';

const Container = styled.div<{
  margin?: string;
  padding?: string;
  theme?: string;
}>`
  ${({ theme }) =>
    theme === 'light' &&
    `
  background: ${Colors('White')};
  color: #fff;
  &:hover {
    background: ${Colors('White')};
  }
  `}
  box-shadow: 0px 5px 15px 0px #555;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

export interface PaperProps {
  children: any;
  margin?: string;
  padding?: string;
  theme?: string;
}

const Paper: React.FC<PaperProps> = ({
  children,
  margin = '1rem',
  padding = '1rem',
  theme,
}) => {
  return (
    <Container margin={margin} padding={padding} theme={theme}>
      {children}
    </Container>
  );
};

export default Paper;
