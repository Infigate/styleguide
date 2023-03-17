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
      background: ${Colors('Primary')};
      color: ${Colors('White')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
  ${({ theme }) =>
    theme === 'success' &&
    `
      background: ${Colors('Secondary')};
      color: ${Colors('White')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
    ${({ theme }) =>
    theme === 'warning' &&
    `
      background: ${Colors('Accent')};
      color: ${Colors('White')};
      &:hover {
        background: ${Colors('PrimaryVariant')};
      }
    `}
    ${({ theme }) =>
    theme === 'danger' &&
    `
      background: ${Colors('Danger')};
      color: ${Colors('White')};
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
  border: none;
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
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  onClick,
  theme,
  size,
}) => {
  return (
    <ButtonElement
      type="button"
      theme={theme}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
