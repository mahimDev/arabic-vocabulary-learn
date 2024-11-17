
const CategoriesCard = ({ category }) => {
    return (
        <div>
            <h1 className="border-2 rounded-2xl p-10 text-xl font-bold text-center">{category.category_name}</h1>
        </div>
    );
};

export default CategoriesCard;