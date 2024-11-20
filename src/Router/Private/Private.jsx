import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const path = location?.pathname

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ path }} to={'/login'}></Navigate>
};

export default Private;