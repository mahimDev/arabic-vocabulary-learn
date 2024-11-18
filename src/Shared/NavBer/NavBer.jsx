import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const NavBer = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleLogOutUser = () => {
        signOutUser()
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: "Sign Out successfully"
                });
            })
            .catch(err => {
                console.log(err)
            })
    }
    // console.log(user)
    return (
        <div>
            <div className="top-0 sticky z-0 text-white bg-indigo-700 backdrop-blur-xl  py-8 ">
                <div className="flex justify-between  w-11/12 mx-auto items-center   ">
                    <ul className="flex gap-4 text-xl  font-semibold">
                        <NavLink> <li>Home</li></NavLink>
                        <NavLink to={`lessons`}><li>Start-learning</li></NavLink>
                        <NavLink ><li>Tutorials</li></NavLink>
                        <NavLink ><li>About-us</li></NavLink>
                        {
                            user && <Link to="/profile"><li>Profile</li></Link>
                        }
                    </ul>
                    {
                        user ?
                            <div className="flex items-center">
                                <img src="" alt="" />
                                <button
                                    onClick={handleLogOutUser}
                                    className="border-2 border-white  py-1 px-3 font-semibold text-xl rounded-md"> Sign Out</button>

                            </div>
                            :
                            <Link to='/login'> <button className="border-2 border-white  py-1 px-3 font-semibold text-xl rounded-md"> Sign In</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBer;