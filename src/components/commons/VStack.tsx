import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{
  margin?: string;
  content?: string;
  height?: string;
}>`
  display: flex;
  flex-flow: column;
  height: ${(props) => props.height && props.height};
  justify-content: ${(props) => props.content && props.content};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export interface VStackProps {
  children: any;
  margin?: string;
  content?: string;
  height?: string;
}

const Vstack: React.FC<VStackProps> = ({
  children,
  margin,
  content,
  height,
}) => {
  return (
    <Container margin={margin} content={content} height={height}>
      {children}
    </Container>
  );
};

export default Vstack;
