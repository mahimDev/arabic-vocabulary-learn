import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";

const Tutorials = () => {
    return (
        <>
            <Helmet>
                <title>Arabic | Tutorial</title>
            </Helmet>
            <div className="w-11/12  mx-auto md:pt-20 md:mt-10 p-5 mt-5 rounded-xl bg-indigo-50 ">
                <div className="mb-16">
                    <SectionTitle title={"Tutorials"}></SectionTitle>
                </div>
                <div className="flex justify-center mt-5 ">
                    <div>
                        <iframe
                            className="rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px] "
                            src="https://www.youtube.com/embed/XC62pWvw4b0?si=VTjrM3zB22AcrQPw"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                        <iframe
                            className="mt-10 rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px]"
                            src="https://www.youtube.com/embed/X1mC1XY65Kc?si=afCzfqKOldzQY7kv"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                        <iframe
                            className="mt-10 rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px]"
                            src="https://www.youtube.com/embed/ENZE1Knq3nU?si=Q6j9MKmU33ISugmN"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                        <iframe
                            className="mt-10 rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px]"
                            src="https://www.youtube.com/embed/wUK4mOqwQN4?si=T37BTg4zi4rP0obd"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                        <iframe
                            className="mt-10 rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px]"
                            src="https://www.youtube.com/embed/lfPrnUZ4osQ?si=I-mRQ87mYsHgn9wb"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                        <iframe
                            className="mt-10 rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px]"
                            src="https://www.youtube.com/embed/ENZE1Knq3nU?si=Q6j9MKmU33ISugmN"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                        <iframe
                            className="mt-10 rounded-2xl mx-auto lg:w-[1000px] md:w-[800px] md:h-[500px]"
                            src="https://www.youtube.com/embed/dinQIb4ZFXY?si=7mU0Iw-nAOxx6iP7"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                    </div>
                </div>
                <div className=" flex justify-center mb-10 ">
                    <Link to={"/lessons"}>  <div
                        className="flex w-fit cursor-pointer  bg-indigo-600 mt-10 p-2 gap-2 pr-5 rounded-full">
                        <div className="rounded-full bg-white  ">
                            <img className="p-2 w-10 " src="https://img.icons8.com/?size=100&id=67PYaLe1snSm&format=png&color=000000" alt="" />
                        </div>
                        <button className="font-bold text-white">Learn Vocabularies</button>
                    </div></Link>
                </div>
            </div>

        </>
    );
};

export default Tutorials;