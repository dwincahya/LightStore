import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import GameList from "../components/gamelist";

function Home() {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <Navbar />
            <Carousel />
            <GameList />
        </div>
    );
}

export default Home;
