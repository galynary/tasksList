import { Navigation } from './Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './Navigation/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar } from '@mui/material';
import { Wrapper } from './Navigation/Navigation.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ margin: '0 auto', padding: '0 16px' }}>
      <AppBar>
        <Wrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
