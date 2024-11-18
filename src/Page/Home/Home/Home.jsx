import { useContext } from "react";
import NavBer from "../../../Shared/NavBer/NavBer";
import About from "../About/About";
import Success from "../Success/Success";
import { AuthContext } from "../../../Auth/AuthProvider";
import Banner from "../Banner/Banner";

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="w-11/12 mx-auto">
            <header className=" h-[100vh]  ">
                {
                    user && <h1 className="text-2xl text-center py-3">Welcome to Arabic Vocabulary {user?.displayName} 😊</h1>
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
            </main>
            <footer></footer>
        </div>
    );
};

export default Home;