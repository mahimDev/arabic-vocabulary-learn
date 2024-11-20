import { useContext, useEffect, useRef, useState } from "react";
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
    // 
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = ['React', 'Angular', 'Vue'];

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);
    return (
        <div>
            <div className="top-0 sticky z-0 text-white bg-indigo-700 backdrop-blur-xl  py-8 ">
                <div className="flex justify-between   w-11/12 mx-auto items-center   ">
                    {/*  */}
                    <div ref={dropDownRef} className="relative mx-auto w-fit text-white md:hidden block">
                        <button onClick={() => setOpen((prev) => !prev)} className="rounded-sm bg-sky-600 px-6 py-2">Dropdown</button>
                        <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1`}>
                            {items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`rounded-sm bg-sky-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-sky-500`}
                                    style={{ transform: `translateY(${open ? 0 : (idx + 1) * 10}px)` }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*  */}
                    <div className="hidden md:block ">
                        <ul className="md:flex  gap-4 text-xl  font-semibold">
                            <NavLink> <li>Home</li></NavLink>
                            <NavLink to={`lessons`}><li>Start-learning</li></NavLink>
                            <NavLink to={"tutorials"}><li>Tutorials</li></NavLink>
                            <NavLink ><li>About-us</li></NavLink>
                            {
                                user && <Link to="/profile"><li>Profile</li></Link>
                            }
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