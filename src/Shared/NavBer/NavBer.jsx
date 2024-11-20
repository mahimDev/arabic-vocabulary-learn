import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";

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
            .catch(() => {

            })
    }

    // 
    const [open, setOpen] = useState(false)
    const nav = <>
        <NavLink> <li>Home</li></NavLink>
        <NavLink to={`lessons`}><li>Start-learning</li></NavLink>
        <NavLink to={"tutorials"}><li>Tutorials</li></NavLink>
        <NavLink ><li>About-us</li></NavLink>
        {
            user && <Link to="/profile"><li>Profile</li></Link>
        }
    </>

    return (
        <div>
            <div className="top-0 sticky z-30 text-white bg-indigo-700 backdrop-blur-xl  py-8 ">
                <div className="flex justify-between   w-11/12 mx-auto items-center   ">

                    <div className="md:hidden block ">
                        <nav>
                            <div className={`md:hidden text-xl bg-indigo-500 text-white py-2 px-4 rounded-md `
                            } onClick={() => setOpen(!open)}>
                                {
                                    open === true ? <RiCloseLargeLine /> :
                                        <BsFillMenuButtonWideFill className=" " />
                                }

                            </div>
                            <ul className={`md:flex absolute z-[500] md:static bg-indigo-500 text-white p-3 duration-1000 left-0 rounded-br-md ${open ? `${user ? 'top-[112px]' : 'top-[104px] '} ` : '-top-60'} `}>
                                {
                                    nav
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="md:flex  gap-4 text-xl  font-semibold">
                            {nav}
                        </ul>
                    </div>
                    {
                        user ?
                            <div className="flex items-center gap-4">
                                {
                                    user?.photoURL && <img className="w-12 h-12 object-cover rounded-full" src={user?.photoURL} alt="" />

                                }
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