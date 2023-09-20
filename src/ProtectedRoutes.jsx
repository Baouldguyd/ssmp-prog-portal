import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, adminOnly, ...rest }) {
  const userRole = sessionStorage.getItem('role'); // Get user role from sessionStorage

  if (!userRole) {
    // If user role is not found in sessionStorage, redirect to login
    return <Navigate to="/" />;
  }

  if (adminOnly && userRole !== 'ADMIN') {
    // If admin role is required but the user is not an admin, redirect to an unauthorized page
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={<Component />} />;
}

export default ProtectedRoute;
