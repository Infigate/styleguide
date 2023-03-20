import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{
  margin?: string;
  padding?: string;
  content?: string;
  height?: string;
  gap?: string;
}>`
  display: flex;
  flex-flow: column;
  height: ${(props) => props.height && props.height};
  justify-content: ${(props) => props.content && props.content};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  gap: ${(props) => props.gap && props.gap};
`;

export interface VStackProps {
  children: any;
  margin?: string;
  padding?: string;
  content?: string;
  height?: string;
  gap?: string;
}

const Vstack: React.FC<VStackProps> = ({
  children,
  margin,
  padding,
  content,
  height,
  gap,
}) => {
  return (
    <Container
      margin={margin}
      padding={padding}
      content={content}
      height={height}
      gap={gap}
    >
      {children}
    </Container>
  );
};

export default Vstack;
