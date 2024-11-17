import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";

const Learning = () => {
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div className="w-11/12 mx-auto mt-20">
            <Link to={-1}><h1 className="border-2 p-5 rounded-xl my-10 w-fit">Back</h1></Link>
            <Helmet>
                <title>Arabic | Learning</title>
            </Helmet>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
                {
                    loader.map(category => <CategoriesCard key={category.Id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Learning;