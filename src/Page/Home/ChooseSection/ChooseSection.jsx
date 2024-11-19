import 'animate.css';
const ChooseSection = () => {
    return (
        <div className='my-40'>
            <div className='my-20 text-center'>
                <h1 className="text-6xl text-indigo-700 font-bold animate__animated animate__bounce animate__repeat-2">    Why Choose Us?</h1>
            </div>
            <div className='lg:flex gap-8'>
                <h1
                    className='bg-indigo-700 text-white shadow-2xl p-10 rounded-2xl text-2xl  lg:w-2/3 h-fit  transform transition-transform duration-500 ease-in-out hover:scale-105'
                >

                    <strong>1 . Comprehensive Vocabulary Lessons:</strong>  <br />Tailored to practical usage, ensuring relevance and ease of learning.
                </h1>
                <h1
                    className='bg-indigo-50 shadow-xl p-10 rounded-2xl text-2xl lg:w-2/3 lg:text-center mt-10  transform transition-transform duration-500 ease-in-out hover:scale-105'
                >

                    <strong>2 . Engaging Examples:</strong>  <br />Includes pronunciation guides to help you build confidence and fluency.
                </h1>
                <h1
                    className='bg-indigo-700 text-white shadow-2xl p-10 rounded-2xl text-2xl  lg:w-2/3 lg:text-end h-fit mt-7 lg:mt-0  transform transition-transform duration-500 ease-in-out hover:scale-105'
                >

                    <strong>3 . Accessible Design: </strong>  <br />User-friendly interface compatible with both desktop and mobile devices.
                </h1>
            </div>
            <div className='lg:flex gap-8'>
                <h1
                    className='bg-indigo-700 text-white shadow-2xl p-10 rounded-2xl text-2xl  lg:w-2/3 h-fit lg:mt-32 mt-7  transform transition-transform duration-500 ease-in-out hover:scale-105'
                >

                    <strong>4 . Multi-Level Lessons:</strong>  <br /> Suitable for beginners, intermediates, and advanced learners
                </h1>
                <h1
                    className='bg-indigo-50 shadow-xl 0 p-10 rounded-2xl text-2xl  lg:w-2/3 lg:text-center mt-10 h-fit  transform transition-transform duration-500 ease-in-out hover:scale-105'
                >

                    <strong>5 . Progress Tracking:</strong>  <br /> Monitor your improvement with tools that display your growth over time.
                </h1>
                <h1
                    className='bg-indigo-700 text-white shadow-2xl p-10 rounded-2xl text-2xl  lg:w-2/3 lg:text-end h-fit lg:mt-32 mt-8  transform transition-transform duration-500 ease-in-out hover:scale-105'
                >

                    <strong>6 . Interactive Practice: </strong>  <br />Exercises and quizzes to reinforce retention and promote active learning.
                </h1>
            </div>
        </div>
    );
};

export default ChooseSection;