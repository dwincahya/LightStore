import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import TabNav from "../components/tabnav";
import GameList from "../components/gamelist";

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <TabNav />
            <GameList />
        </div>
    );
}

export default Home;
