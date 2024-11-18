import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Profile;