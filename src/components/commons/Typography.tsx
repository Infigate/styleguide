import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
}>`
  font-size: 2.4rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

const H2 = styled.h2<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
}>`
  font-size: 1.8rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

const H3 = styled.h3<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
}>`
  font-size: 1.4rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

const P = styled.p<{
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
}>`
  font-size: 1rem;
  display: block;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.align && props.align};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

export interface TypographyProps {
  type: string;
  text: string;
  margin?: string;
  color?: string;
  align?: string;
  padding?: string;
}

const Typography: React.FC<TypographyProps> = ({
  type,
  text,
  margin,
  color,
  align,
  padding,
}) => {
  if (type === 'h1') {
    return (
      <H1 margin={margin} color={color} align={align} padding={padding}>
        {text}
      </H1>
    );
  }

  if (type === 'h2') {
    return (
      <H2 margin={margin} color={color} align={align} padding={padding}>
        {text}
      </H2>
    );
  }

  if (type === 'h3') {
    return (
      <H3 margin={margin} color={color} align={align} padding={padding}>
        {text}
      </H3>
    );
  }

  if (type === 'p') {
    return (
      <P margin={margin} color={color} align={align} padding={padding}>
        {text}
      </P>
    );
  }

  return null;
};

export default Typography;
