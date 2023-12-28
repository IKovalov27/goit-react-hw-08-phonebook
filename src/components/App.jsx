import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/user/userThunk';
import { useEffect } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'components/Public/PublicRoute';
import SignUp from 'pages/SignUp/SignUp';
import Login from 'pages/Login/Login';

import Contacts from 'pages/Contacts';

import NotFound from 'pages/NotFound';



// eslint-disable-next-line no-lone-blocks
{/* import { PrivateRoute } from 'components/Private/PrivateRoute'; */}



export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route path="/" element={<PublicRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;