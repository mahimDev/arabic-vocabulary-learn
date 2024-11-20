import { Link } from "react-router-dom";
import { speechHandler } from "../../Utils/utils";

const CategoriesCard = (prop = {}) => {
    const { category } = prop || {}

    return (
        <div>
            <Link to={`${category.id}`}>  <h1
                onClick={() => speechHandler('If you want to listen to the audio, your computer must have Arabic language support.')}
                className=" rounded-2xl p-10 text-2xl font-bold text-center bg-indigo-600 text-white shadow-lg">{category.category_name}</h1></Link>
        </div>
    );
};

export default CategoriesCard;