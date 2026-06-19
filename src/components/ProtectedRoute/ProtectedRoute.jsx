import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children ? children : <Outlet />;
}
