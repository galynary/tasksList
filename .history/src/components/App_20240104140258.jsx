import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header } from './AppBar/AppBar';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'utils/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBook/PhoneBookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<PhoneBookPage />}
                  />
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};
