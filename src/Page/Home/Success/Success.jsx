import CountUp from "react-countup";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Success = () => {
    return (
        <div className="mt-20">
            <SectionTitle title={"Success"}></SectionTitle>
            <div className="flex justify-center pt-24 ">
                <div className="relative border-b-2 border-indigo-600 rounded-b-[50px]  w-fit pb-14 px-10">
                    <h1 className="font-bold text-indigo-600 text-7xl">

                        <CountUp
                            className="ml-3  "
                            enableScrollSpy={true}
                            duration={5}
                            end={100} />
                        +
                    </h1>
                    <h1 className="text-3xl font-semibold absolute right-16 "> User</h1>
                </div>
            </div>
            <div className="md:flex md:ml-0 ml-32  text-center justify-center md:gap-48 md:my-20 pt-10">

                <div className=" mb-10 md:mb-0  border-b-2 border-indigo-600  rounded-b-[50px] w-fit  px-10">
                    <h1 className="font-bold text-6xl mb-2 text-indigo-700">
                        <CountUp
                            className="ml-3  "
                            enableScrollSpy={true}
                            duration={5}
                            end={10} />
                        +
                    </h1>
                    <h1 className="text-3xl font-semibold ml-10 mb-3"> Lesson</h1>
                </div>
                <div className=" hidden md:block border border-indigo-100"></div>
                <div className="border-b-2 border-indigo-600  rounded-b-[50px] w-fit  px-10">
                    <h1 className="font-bold text-6xl mb-2 text-indigo-700">
                        <CountUp
                            className="ml-3"
                            enableScrollSpy={true}
                            duration={5}
                            end={20} />
                        +
                    </h1>
                    <h1 className="text-3xl font-semibold  ml-10 mb-3"> Tutorial </h1>
                </div>
            </div>
        </div >
    );
};

export default Success;

