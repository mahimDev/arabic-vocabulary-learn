import { Link, useLoaderData, useParams } from "react-router-dom";
import LessonCard from "../LessonCard/LessonCard";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const LessonSection = () => {
    const loader = useLoaderData()
    const { id } = useParams()
    const data = loader.filter(item => item.lesson_no === parseInt(id))

    return (
        <div className="w-11/12 mx-auto mt-20">
            <Helmet>
                <title>Arabic Lesson | {id} </title>
            </Helmet>

            <div className=" ">
                <Link to={'/lessons'}>  <div
                    className="flex w-fit cursor-pointer  bg-indigo-600  p-2 gap-2 pr-5 rounded-full">
                    <div className="rounded-full bg-white  ">
                        <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=67PYaLe1snSm&format=png&color=000000" alt="" />
                    </div>
                    <button className="font-bold text-white">Back</button>
                </div></Link>
            </div>
            <div className="mb-10">
                <SectionTitle title={`Lesson ${id}`}></SectionTitle>
            </div>

            <h1 className=" text-gray-400">📌If you want to listen to the audio, your computer must have Arabic language support.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 ">
                {
                    data.map(word => <LessonCard key={word.id} item={word}></LessonCard>)
                }
            </div>
        </div>
    );
};

export default LessonSection;