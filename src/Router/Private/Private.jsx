import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Private;