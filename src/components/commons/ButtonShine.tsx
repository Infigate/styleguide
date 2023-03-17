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
      &:hover {
        background-color: ${Colors('Primary')};
      }
    `}
  ${({ theme }) =>
    theme === 'success' &&
    `
      &:hover {
        background-color: ${Colors('Secondary')};
      }
    `}
  ${({ theme }) =>
    theme === 'warning' &&
    `
      &:hover {
        background-color: ${Colors('Accent')};
      }
    `}
  ${({ theme }) =>
    theme === 'danger' &&
    `
      &:hover {
        background-color: ${Colors('Danger')};
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
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
  cursor: pointer;
  color: ${Colors('White')};
  background: ${Colors('Dark')};
  border-radius: 10px;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  &:disabled {
    color: ${Colors('White')};
    background: ${Colors('Gray')};
    cursor: not-allowed;
  }
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: rotate(45deg);
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
    transform: translateX(50%) translateY(50%) rotate(60deg);
  }
`;

type ButtonProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  theme?: string;
  size?: string;
};

const ButtonShine: React.FC<ButtonProps> = ({
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

export default ButtonShine;
