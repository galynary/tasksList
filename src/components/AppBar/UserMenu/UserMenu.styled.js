import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.gap[1]}px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: ${theme.colors.white}
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;
