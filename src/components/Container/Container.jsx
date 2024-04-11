import { theme } from '../../styles/theme';

export const Container = props => (
  <div style={containerStyles}></div>
);

const containerStyles = {
  width: "100%", 
  margin: "0 auto",
  padding: "0px 20px",
  backgroundColor: theme.colors.gray,
  color: theme.colors.white 
};