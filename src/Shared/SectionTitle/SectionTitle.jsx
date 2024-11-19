
const SectionTitle = ({ title }) => {
    return (
        <div className="flex justify-center">
            <h1 className=" text-5xl font-bold text-indigo-700 text-center   w-fit border-b-2 border-x-2 pb-3 px-10 pt-1 rounded-l-full  rounded-r-full border-indigo-800 shadow-2xl">{title}</h1>
        </div>
    );
};

export default SectionTitle;