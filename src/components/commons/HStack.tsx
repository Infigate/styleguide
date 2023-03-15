import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{
  align?: string;
  gap?: string;
  margin?: string;
  content?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  gap: ${(props) => (props.gap ? props.gap : '0rem')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => props.content && props.content};
`;

export interface HStackProps {
  children: any;
  margin?: string;
  gap?: string;
  content?: string;
  align?: string;
}

const Hstack: React.FC<HStackProps> = ({
  children,
  margin,
  gap,
  content,
  align,
}) => {
  return (
    <Container margin={margin} gap={gap} content={content} align={align}>
      {children}
    </Container>
  );
};

export default Hstack;
