import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import { Button } from './InfoUser.styled'; 

const InfoUser = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/login');
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












