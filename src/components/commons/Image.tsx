import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img<{
  width?: string;
  height?: string;
  margin?: string;
  onClick?: () => void;
}>`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  display: block;
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  ${(props) => props.onClick && 'cursor: pointer;'};
`;

export interface ImageProps {
  path: string | JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  margin?: string;
  onClick?: () => void;
}

export const Image: React.FC<ImageProps> = ({
  path,
  width,
  height,
  margin,
  onClick,
}) => {
  return (
    <ImageStyle
      src={`${process.env.PUBLIC_URL + path}`}
      width={width}
      height={height}
      margin={margin}
      onClick={onClick}
    />
  );
};

export default Image;
