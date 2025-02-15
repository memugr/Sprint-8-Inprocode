import { Link } from "react-router-dom";
import eventImage from "../../assets/ConcertImage.jpg";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Welcome to the Inprocode Project<br />Event & Concert Planner
                    </h1>
                    <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                        Discover, plan, and manage music events effortlessly. Whether you&apos;re an artist, fan, or event organizer, our platform provides an interactive way to explore concerts, create events, and keep track of your favorite performances.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mb-6">
                        Featuring a real-time map for event locations, a calendar to schedule your favourite concerts, and insightful graphics to track trends in the music industry.
                    </p>
                    <Link to="/map" className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                        Explore Events
                    </Link>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6 flex justify-center">
                    <img src={eventImage} alt="Event" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div> 
    );
};

export default Home;
