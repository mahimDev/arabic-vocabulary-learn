import { useContext } from "react";
import NavBer from "../../../Shared/NavBer/NavBer";
import About from "../About/About";
import Success from "../Success/Success";
import { AuthContext } from "../../../Auth/AuthProvider";
import Banner from "../Banner/Banner";
import Footer from "../../../Shared/Footer/Footer.jsx";
import ChooseSection from "../ChooseSection/ChooseSection.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Home = () => {
    AOS.init()
    const { user } = useContext(AuthContext)
    return (
        <div className="md:w-11/12 mx-auto">
            <header className=" h-[100vh]  ">
                {
                    user
                    &&
                    <div>
                        <h1 className="text-2xl text-center py-3 animate__animated animate__bounce animate__repeat-2 text-indigo-400 hidden lg:block"
                        >Welcome to Arabic Vocabulary {user?.displayName} 😊
                        </h1>
                        <h1 className="text-2xl text-center py-3 animate__animated animate__bounce animate__repeat-2 text-indigo-400 lg:hidden block"
                        >Hi {user?.displayName} 😊
                        </h1>
                    </div>

                }
                <nav>
                    <NavBer></NavBer>
                </nav>
                {/* banner */}
                <Banner></Banner>
            </header>
            <main>
                {/* About section */}
                <section>
                    <About></About>
                </section>
                {/* Success section */}
                <section>
                    <Success></Success>
                </section>
                {/* Why Choose Us?  */}
                <section>
                    <ChooseSection></ChooseSection>
                </section>
            </main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default Home;