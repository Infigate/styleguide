import React from 'react';
import styled from 'styled-components';
import Colors from 'lib/Colors';

const ButtonElement = styled.button<{
  theme?: string;
  size?: string;
}>`
  ${({ size }) =>
    size === 'lg' &&
    `
      font-size: 1.4rem;
    `}
  ${({ size }) =>
    size === 'sm' &&
    `
      font-size: 0.6rem;
    `}
  border: 1px solid rgb(87 87 87);
  cursor: pointer;
  color: rgb(0 0 0);
  background: rgb(192 192 192 / 0%);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  &:hover {
    background: ${Colors('Trance')};
  }
  &:disabled {
    color: ${Colors('White')};
    background: ${Colors('Gray')};
    cursor: not-allowed;
  }
`;

type ButtonProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  theme?: string;
  size?: string;
  type?: any;
};

const ButtonClear: React.FC<ButtonProps> = ({
  disabled,
  children,
  onClick,
  theme,
  size,
  type = 'button',
}) => {
  return (
    <ButtonElement
      type={type}
      theme={theme}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtonElement>
  );
};

export default ButtonClear;
