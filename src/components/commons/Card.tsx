import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div<{
  background?: string;
  width?: string;
  height?: string;
}>`
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
  ${(props) =>
    props.background &&
    `
    background: url(${props.background});
    background-size: cover;
    background-position: center;
    `}
  width: ${(props) => (props.width ? props.width : '1.3rem')};
  height: ${(props) => (props.height ? props.height : '0.7rem')};
`;

const CardHeader = styled.div`
  padding: 0.5rem 1rem;
`;

const CardTitle = styled.h5`
  margin-bottom: 0;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardFooter = styled.div`
  padding: 0.5rem 1rem;
`;

type CardProps = {
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  footer,
  children,
  background,
  width,
  height,
}) => {
  return (
    <CardWrapper background={background} width={width} height={height}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
};

export default Card;
