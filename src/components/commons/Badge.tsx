import React from 'react';
import styled from 'styled-components';
import Colors from 'lib/Colors';

const BadgeElement = styled.div<{
  theme?: string;
  size?: string;
}>`
  ${({ theme }) =>
    theme === 'info' &&
    `
      background: ${Colors('Primary')};
      color: ${Colors('White')};
    `}
  ${({ theme }) =>
    theme === 'success' &&
    `
      background: ${Colors('Secondary')};
      color: ${Colors('White')};
    `}
    ${({ theme }) =>
    theme === 'warning' &&
    `
      background: ${Colors('Accent')};
      color: ${Colors('White')};
    `}
    ${({ theme }) =>
    theme === 'danger' &&
    `
      background: ${Colors('Danger')};
      color: ${Colors('White')};
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
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  font-weight: bold;
`;

type BadgeProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  theme?: string;
  size?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, onClick, theme, size }) => {
  return (
    <BadgeElement theme={theme} onClick={onClick} size={size}>
      {children}
    </BadgeElement>
  );
};

export default Badge;
