import React from 'react';
import styled from 'styled-components';
import Colors from 'lib/Colors';

const ButtonElement = styled.button<{
  theme?: string;
  size?: string;
}>`
  ${({ theme }) =>
    theme === 'info' &&
    `
      border: 2px solid ${Colors('Primary')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
  ${({ theme }) =>
    theme === 'success' &&
    `
      border: 2px solid ${Colors('Secondary')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
  ${({ theme }) =>
    theme === 'warning' &&
    `
      border: 2px solid ${Colors('Accent')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
  ${({ theme }) =>
    theme === 'danger' &&
    `
      border: 2px solid ${Colors('Danger')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
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
  cursor: pointer;
  color: ${Colors('White')};
  background: ${Colors('Dark')};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-weight: bold;
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

const ButtonOutline: React.FC<ButtonProps> = ({
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

export default ButtonOutline;
