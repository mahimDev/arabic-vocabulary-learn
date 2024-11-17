import { NavLink } from "react-router-dom";

const NavBer = () => {
    return (
        <div>
            <div className="top-0 sticky z-0 text-white bg-indigo-700 backdrop-blur-xl  py-8 ">
                <div className="flex justify-between  w-11/12 mx-auto items-center   ">
                    <ul className="flex gap-4 text-xl  font-semibold">
                        <NavLink> <li>Home</li></NavLink>
                        <NavLink ><li>Start-learning</li></NavLink>
                        <NavLink ><li>Tutorials</li></NavLink>
                        <NavLink ><li>About-us</li></NavLink>
                        <NavLink ><li>(my-profile)</li></NavLink>
                    </ul>
                    <button className="border-2 border-white  py-1 px-3 font-semibold text-xl rounded-md"> Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBer;