import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: ${theme.padding[2]}px;
  color: ${theme.colors.white};
  transition: color 250ms ease-in-out;
  &:hover {
    color: ${theme.colors.second};
  }
  &:active {
    color: ${theme.colors.second};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
`;
