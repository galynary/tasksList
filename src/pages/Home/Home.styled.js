import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HomeSection = styled.section`
  padding: 36px 0;
  background-color: ${theme.colors.white};
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 480px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 100px;
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
    align-items: center;
  }
  h1 {
    font-size: 24px;
    font-weight: 800;
  }
  p {
    line-height: 1.2;
    max-width: 500px;
    text-align: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 42px;
      font-weight: 800;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 100px;
    div {
      display: flex;
      flex-direction: column;
      gap: ${theme.gap[3]}px;
    }
    h1 {
      font-size: 56px;
    }
  }
`;
