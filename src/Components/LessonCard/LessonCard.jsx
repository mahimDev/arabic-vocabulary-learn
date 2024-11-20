import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { pronounceWord } from "../../Utils/utils";


const LessonCard = (props = {}) => {
    const { item } = props || {}
    const navigate = useNavigate()
    const [color, setColor] = useState(null)
    const [b_color, setB_color] = useState('')
    const {
        difficulty,
        example,
        // id,
        // lesson_no,
        meaning,
        part_of_speech,
        pronunciation,
        when_to_say,
        word
    } = item
    useEffect(() => {
        if (difficulty === "easy") {
            setColor("bg-green-600")
            setB_color("border-green-600")
        } else if (difficulty === "medium") {
            setColor("bg-yellow-600")
            setB_color("border-yellow-600")
        } else if (difficulty === "difficult") {
            setColor("bg-red-600")
            setB_color("border-red-600")
        }
    }, [difficulty])


    const handleWordCard = () => {
        pronounceWord(word)

        Swal.fire({
            title: `${word}`,
            color: `white`,
            background: `#4A00E0`,
            html: `<div>  
            <h1 >Meaning : ${meaning}  </h1>
            <p className="text-base font-bold py-3">when_to_say : ${when_to_say} </p>
            <p>example : ${example} </p>
            </div>` ,
            showCancelButton: true,
            cancelButtonText: "Back to Lesson",
            showConfirmButton: false
        });

    }
    return (
        <button onClick={handleWordCard}>
            <div className={`border-b-4 ${b_color} text-center p-8 rounded-se-full rounded-bl-full overflow-auto bg-indigo-50 `}>
                <h1 className={`text-3xl font-bold border ${color} rounded-full text-white`}>  {word}</h1>
                <h1 className="text-base font-medium pt-1">Meaning :  {meaning}</h1>
                <h1 className="text-base font-medium pt-1">Pronunciation :  {pronunciation}</h1>
                <h1 className="text-base font-medium pt-1">Part of speech :  {part_of_speech}</h1>
            </div>
        </button>
    );
};

export default LessonCard;