import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import aboutImg from '../../../assets/about.jpg';
const About = () => {
    return (
        <div>
            <SectionTitle title={"About"}></SectionTitle>
            <div className="grid grid-cols-1   lg:grid-cols-6  my-20 p-10">
                <div className="col-span-3">
                    <div className="relative  flex  justify-center ">
                        <p className="w-2/3   h-fit mt-10 text-xl bg-indigo-100  p-10 rounded-2xl text-right" dir="rtl" >
                            في  المفردات العربية تتمثل مهمتنا في جعل تعلم اللغة العربية متاحًا وجذابًا وفعالًا للجميع. تم تأسيسنا بشغف باللغة والتعليم، وقد كرسنا أنفسنا لتوفير موارد عالية الجودة للمتعلمين من جميع المستويات.
                        </p>
                        <img className="w-20 h-20 rounded-full absolute right-28" src="https://img.icons8.com/?size=100&id=nKihb6jsTa5l&format=png&color=000000" alt="" />
                    </div>
                    <div className="relative  flex  justify-center pt-10">
                        <p className="w-2/3  h-fit mt-10 text-lg bg-indigo-100  p-10 rounded-2xl " >
                            At Arabic Vocabulary, our mission is to make learning the Arabic language accessible, engaging, and effective for everyone. Founded with a passion for language and education, we have dedicated ourselves to providing high-quality resources to learners of all levels.
                        </p>
                        <img className="w-20 h-20 rounded-full absolute left-28" src="https://img.icons8.com/?size=100&id=82433&format=png&color=000000" alt="" />
                    </div>
                </div>
                <div className="border rounded-2xl p-5 col-span-3">
                    <img className="rounded-2xl   w-full" src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;