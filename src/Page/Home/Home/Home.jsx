import NavBer from "../../../Shared/NavBer/NavBer";
import About from "../About/About";
import Success from "../Success/Success";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header className=" h-[100vh] bg-slate-300 ">
                <h1 className="text-5xl text-center">Banner</h1>
                <nav>
                    <NavBer></NavBer>
                </nav>
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