import React from 'react';
import { Button } from './InfoUser.styled'; 

const { useDispatch } = require('react-redux');
const { logoutThunk } = require('redux/user/userThunk');


const InfoUser = () => {

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
        <div>
          <Button onClick={handleSubmit}>
            Log Out
          </Button>
        </div>
    </div>
  );
};

export default InfoUser;    















