import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const [showInput, setShowInput] = useState(false)
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const handleUpdateUser = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        if (name && photo) {
            updateUserProfile(name, photo)
                .then(() => {
                    Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                    });

                })
                .catch(err => {
                    console.log(err)
                })
            return
        }

        setShowInput(!showInput)
    }
    return (
        <div className="  m-10">
            <div className="flex justify-between items-center ">
                <Link to={-1}>  <div
                    className="flex w-fit cursor-pointer  bg-indigo-600  p-2 gap-2 pr-5 rounded-full">
                    <div className="rounded-full bg-white  ">
                        <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=67PYaLe1snSm&format=png&color=000000" alt="" />
                    </div>
                    <button className="font-bold text-white">Back</button>
                </div></Link>
                <div className="flex items-center  pr-20">
                    <img className="w-14" src="https://img.icons8.com/?size=100&id=XaOSGwKF6rN2&format=png&color=000000" alt="" />
                    <h1 className="text-2xl font-bold text-indigo-700">Welcome to Profile</h1>
                </div>
                <div>

                </div>
            </div>
            <div className=" flex justify-center ">
                <div className="w-60 h-60 rounded-full overflow-auto mt-20  ">
                    <img className=" h-full object-cover" src={user?.photoURL} alt="" />
                </div>

            </div>
            <div className=" text-center mt-1 py-5 mx-56  rounded-full ">
                <h1 className="text-2xl font-medium "> {user?.displayName}</h1>
                <h1 className="text-2xl font-medium "> {user?.email}</h1>
            </div>

            <form
                onSubmit={handleUpdateUser}>

                <div>
                    {
                        showInput ?
                            <div className="flex flex-col md:mx-[700px] justify-center my-5">
                                <input className="rounded-lg border-2 border-[#6c15e7] bg-transparent px-4 py-2 text-[#ad7af5] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text"
                                    name="name"
                                    placeholder="name"
                                />
                                <input className="rounded-lg border-2 border-[#6c15e7] bg-transparent px-4 py-2 text-[#ad7af5] ring-offset-1 duration-200 focus:outline-none focus:ring-2 mt-4" type="text"
                                    name="photo"
                                    placeholder="photo"
                                />
                            </div>
                            :

                            ""
                    }
                </div>
                <div className="flex justify-center">
                    <button

                        className="text-xl rounded-md w-48 font-semibold h-14 text-white bg-indigo-600 overflow-hidden relative z-10 group hover:text-black duration-700">
                        {showInput ? "Update " : "Edit Profile"}
                        <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;