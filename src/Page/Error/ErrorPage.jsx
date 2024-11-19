import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[100vh] bg-indigo-500  flex justify-center ">
            <div className="text-white   text-center mt-32 lg:mt-10">
                <h1 className="border-r-4 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 border-b-4 rounded-full w-fit lg:text-[300px] md:text-[150px] text-[75px] p-10 font-bold">4<span className="lg:text-[400px] md:text-[200px] text-[100px]">0</span>4</h1>
                <p className=" lg:text-7xl md:text-4xl text-2xl  font-bold mt-5 ">Page Not Found</p>
                <div className="flex justify-center mb-20">
                    <Link to={'/'}>  <div
                        className="flex w-fit cursor-pointer  bg-indigo-600 mt-10 p-2 gap-2 pr-5 rounded-full">
                        <div className="rounded-full bg-white  ">
                            <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=tB1oVEYeATcE&format=png&color=000000" alt="" />
                        </div>
                        <button className="font-bold text-white">Go To Home</button>
                    </div></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;