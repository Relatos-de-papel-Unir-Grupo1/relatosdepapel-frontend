import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export default function ProtectedRoute({ children }) {
    const { user } = useContext(GlobalContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children ? children : <Outlet />;
}
