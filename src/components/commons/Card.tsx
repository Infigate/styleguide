import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div<{
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  onClick?: () => void;
  css?: string;
}>`
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
  ${(props) =>
    props.background &&
    `
    background: url(${process.env.PUBLIC_URL}${props.background});
    background-size: cover;
    background-position: center;
    `}
  width: ${(props) => (props.width ? props.width : '1.3rem')};
  height: ${(props) => (props.height ? props.height : '0.7rem')};
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  ${(props) => props.onClick && 'cursor: pointer;'};
  transition: transform 0.3s ease;
  ${(props) =>
    props.onClick &&
    `
    &:hover {
      transform: scale(1.01);
    }
  `};
  ${(props) =>
    props.css &&
    `
    ${props.css}
  `};
`;

const CardBody = styled.div`
  padding: 1rem;
`;

type CardProps = {
  children?: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  onClick?: () => void;
  css?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  background,
  width,
  height,
  padding,
  onClick,
  css,
}) => {
  return (
    <CardWrapper
      background={background}
      width={width}
      height={height}
      padding={padding}
      onClick={onClick}
      css={css}
    >
      <CardBody>{children}</CardBody>
    </CardWrapper>
  );
};

export default Card;
