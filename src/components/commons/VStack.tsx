import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{
  margin?: string;
  content?: string;
  height?: string;
  gap?: string;
}>`
  display: flex;
  flex-flow: column;
  height: ${(props) => props.height && props.height};
  justify-content: ${(props) => props.content && props.content};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  gap: ${(props) => props.gap && props.gap};
`;

export interface VStackProps {
  children: any;
  margin?: string;
  content?: string;
  height?: string;
  gap?: string;
}

const Vstack: React.FC<VStackProps> = ({
  children,
  margin,
  content,
  height,
  gap,
}) => {
  return (
    <Container margin={margin} content={content} height={height} gap={gap}>
      {children}
    </Container>
  );
};

export default Vstack;
