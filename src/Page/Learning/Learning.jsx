import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Learning = () => {
    const loader = useLoaderData()
    return (
        <div className="w-11/12 mx-auto mt-20">
            <Link to={'/'}>  <div
                className="flex w-fit cursor-pointer  bg-indigo-600 mt-10 p-2 gap-2 pr-5 rounded-full">
                <div className="rounded-full bg-white  ">
                    <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=67PYaLe1snSm&format=png&color=000000" alt="" />
                </div>
                <button className="font-bold text-white">Back</button>
            </div></Link>
            <Helmet>
                <title>Arabic | Learning</title>
            </Helmet>
            <div className="mb-36">
                <SectionTitle title={"Lesson"}></SectionTitle>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 ">
                {
                    loader.map(category => <CategoriesCard key={category.Id} category={category}></CategoriesCard>)
                }
            </div>
            {/* tutorial */}
            <div className="my-36">
                <SectionTitle title={"Tutorial"}></SectionTitle>
            </div>
            <div className="flex my-8">
                <iframe
                    className="rounded-2xl mx-auto  md:w-[800px] md:h-[400px] "
                    src="https://www.youtube.com/embed/XC62pWvw4b0?si=VTjrM3zB22AcrQPw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
                <iframe
                    className=" rounded-2xl mx-auto  md:w-[800px] md:h-[400px]"
                    src="https://www.youtube.com/embed/X1mC1XY65Kc?si=afCzfqKOldzQY7kv"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
            </div>
            <div className="flex justify-center mb-20">
                <Link to={'/tutorials'}>  <div
                    className="flex w-fit cursor-pointer  bg-indigo-600 mt-10 p-2 gap-2 pr-5 rounded-full">
                    <div className="rounded-full bg-white  ">
                        <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=63266&format=png&color=000000" alt="" />
                    </div>
                    <button className="font-bold text-white">View More</button>
                </div></Link>
            </div>
        </div>
    );
};

export default Learning;