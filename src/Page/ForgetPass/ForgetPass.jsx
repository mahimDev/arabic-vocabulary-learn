import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ForgetPass = () => {
    const { passwordReset } = useContext(AuthContext)
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
    const resetPassword = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get("email")

        // const email = "emailRef.current.value"
        if (!email) {
            Toast.fire({
                icon: "error",
                title: `Please enter your valid email address`
            })
        } else {
            passwordReset(email)
                .then(() => {
                    Toast.fire({
                        icon: "success",
                        title: `We’ve sent a password reset link to your registered email address. Please check your inbox `
                    })
                })
                .catch(err => {
                    console.log(err.massage)
                    console.log(err.code)
                })
        }
    }
    return (
        <div>
            <div className="  mt-48">
                <div className="flex lg:w-8/12 mx-auto  h-full items-center justify-center md:p-0">
                    <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md">
                        {/* design side  */}
                        <div className="relative hidden items-center justify-center bg-indigo-400 md:flex md:w-[50%]">
                            <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-indigo-300 to-indigo-500"></div>
                            <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-indigo-300 to-indigo-500"></div>
                            <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-indigo-300 to-indigo-500 transition-all"></div>
                            <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-indigo-300 to-indigo-500"></div>
                            <div className="z-10 space-y-2 text-center">
                                <h2 className="text-3xl font-medium  text-white/80">Welcome Back</h2>
                                <p className="animate-pulse text-sm text-white/60">Please Enter You Information</p>
                            </div>
                        </div>
                        {/* form side  */}
                        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
                            <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-indigo-400">Reset Your Password</h2>
                            <form
                                onSubmit={resetPassword}
                                className="flex w-full flex-col items-center justify-center gap-4">
                                <input
                                    className="w-[80%] rounded-lg border border-indigo-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                                    type="email"
                                    placeholder="Email"
                                    name="email"

                                />
                                <input
                                    className="w-[80%] rounded-lg border border-indigo-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />

                                <p className="text-[14px] text-gray-400">
                                    Do not have an account ? <Link to='/register' className="text-indigo-400 border-b border-indigo-400">Create one</Link>
                                </p>
                                <button className="uppercase w-[80%] rounded-lg bg-indigo-400 px-6 py-2 font-medium text-white outline-none hover:bg-indigo-500 md:w-[60%]" type="submit">
                                    Update Password
                                </button>
                            </form>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;