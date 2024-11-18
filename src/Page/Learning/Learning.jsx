import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Learning = () => {
    const loader = useLoaderData()
    return (
        <div className="w-11/12 mx-auto mt-20">
            <Link to={-1}>  <div
                className="flex w-fit cursor-pointer  bg-indigo-600 mt-10 p-2 gap-2 pr-5 rounded-full">
                <div className="rounded-full bg-white  ">
                    <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=67PYaLe1snSm&format=png&color=000000" alt="" />
                </div>
                <button className="font-bold text-white">Back</button>
            </div></Link>
            <Helmet>
                <title>Arabic | Learning</title>
            </Helmet>
            <SectionTitle title={"Lesson"}></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 ">
                {
                    loader.map(category => <CategoriesCard key={category.Id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Learning;