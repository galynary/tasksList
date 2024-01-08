import styled from 'styled-components';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin: 0 auto;
  color: ${theme.colors.second};
`;
