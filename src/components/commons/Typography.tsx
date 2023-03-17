import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
  background?: string;
}>`
  font-size: 2.4rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? props.color : '#fff')};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  background: ${(props) => props.background && props.background};
`;

const H2 = styled.h2<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
  background?: string;
}>`
  font-size: 1.8rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? props.color : '#fff')};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  background: ${(props) => props.background && props.background};
`;

const H3 = styled.h3<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
  background?: string;
}>`
  font-size: 1.4rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? props.color : '#fff')};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  background: ${(props) => props.background && props.background};
`;

const P = styled.p<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
  background?: string;
}>`
  font-size: 1rem;
  display: block;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? props.color : '#fff')};
  text-align: ${(props) => (props.align ? props.align : '')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  background: ${(props) => props.background && props.background};
`;

export interface TypographyProps {
  type: string;
  text: string;
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
  background?: string;
}

const Typography: React.FC<TypographyProps> = ({
  type,
  text,
  margin,
  color,
  align,
  padding,
  background,
}) => {
  if (type === 'h1') {
    return (
      <H1
        margin={margin}
        color={color}
        align={align}
        padding={padding}
        background={background}
      >
        {text}
      </H1>
    );
  }

  if (type === 'h2') {
    return (
      <H2
        margin={margin}
        color={color}
        align={align}
        padding={padding}
        background={background}
      >
        {text}
      </H2>
    );
  }

  if (type === 'h3') {
    return (
      <H3
        margin={margin}
        color={color}
        align={align}
        padding={padding}
        background={background}
      >
        {text}
      </H3>
    );
  }

  if (type === 'p') {
    return (
      <P
        margin={margin}
        color={color}
        align={align}
        padding={padding}
        background={background}
      >
        {text}
      </P>
    );
  }

  return null;
};

export default Typography;
