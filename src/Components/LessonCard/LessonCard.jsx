import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const LessonCard = (props = {}) => {
    const { item } = props || {}
    const navigate = useNavigate()
    const {
        difficulty,
        example,
        id,
        lesson_no,
        meaning,
        part_of_speech,
        pronunciation,
        when_to_say,
        word
    } = item


    const handleWordCard = () => {
        Swal.fire({
            title: `${word}`,
            color: ``,
            html: `<div>  
            <h1>Meaning : ${meaning}  </h1>
            <p>when_to_say : ${when_to_say} </p>
            <p>example : ${example} </p>
            </div>` ,
            showCancelButton: true,
            cancelButtonText: "Back to Lesson",
            showConfirmButton: false

        }).then(() => navigate(-1));
        console.log(id)
    }
    return (
        <button onClick={handleWordCard}>
            <div className="border-b-4 border-indigo-700 text-center p-8 rounded-se-full rounded-bl-full overflow-auto bg-indigo-50">
                <h1 className="text-3xl font-bold border bg-indigo-600 rounded-full text-white">  {word}</h1>
                <h1 className="text-base font-medium pt-1">Meaning :  {meaning}</h1>
                <h1 className="text-base font-medium pt-1">Pronunciation :  {pronunciation}</h1>
                <h1 className="text-base font-medium pt-1">Part of speech :  {part_of_speech}</h1>
            </div>
        </button>
    );
};

export default LessonCard;