import { useAuth } from 'hooks/useAuth';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {!isLoggedIn && <StyledLink to="/">Home</StyledLink>}
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </div>
  );
};
