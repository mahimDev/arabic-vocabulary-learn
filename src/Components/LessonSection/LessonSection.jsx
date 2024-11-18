import { useLoaderData, useParams } from "react-router-dom";
import LessonCard from "../LessonCard/LessonCard";
import { Helmet } from "react-helmet";

const LessonSection = () => {
    const loader = useLoaderData()
    const { id } = useParams()
    const data = loader.filter(item => item.lesson_no === parseInt(id))

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Arabic Lesson | {id} </title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    data.map(word => <LessonCard key={word.id} item={word}></LessonCard>)
                }
            </div>
        </div>
    );
};

export default LessonSection;