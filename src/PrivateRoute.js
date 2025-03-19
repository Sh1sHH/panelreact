import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("username");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return element;
};

export default PrivateRoute;
