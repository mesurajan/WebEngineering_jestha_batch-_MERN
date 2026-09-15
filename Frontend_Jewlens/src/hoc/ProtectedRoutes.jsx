
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoutes