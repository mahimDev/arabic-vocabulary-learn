
const Loading = () => {
    return (
        <div className="h-[90vh] flex justify-center mt-[500px]">
            <div className="w-32 h-32  border-l-2 border-green-600 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
                <div className="w-20 h-20  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
                    <div className="w-12 h-12  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>
        </div>
    );
};

export default Loading;