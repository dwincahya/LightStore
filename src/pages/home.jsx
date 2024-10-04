import Navbar from "../components/navbar";
import Carousel from "../components/carousel";

function Home() {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <Navbar />
            <Carousel />
        </div>
    );
}

export default Home;
