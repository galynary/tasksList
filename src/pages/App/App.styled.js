import { theme } from '../../styles/theme';
import styled from 'styled-components';
export const Wrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.padding[2]}px;
  margin-top: 100px;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.black};
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.title};
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactTitle = styled.h2`
  font-size: ${theme.typography.title};
  text-align: center;
  margin-bottom: 20px;
`;
