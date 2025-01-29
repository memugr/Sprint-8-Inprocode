import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="bg-white shadow-md rounded-lg">
        <div className="flex justify-center items-center p-2">
            <div className="flex gap-8 flex-wrap">
                <Link
                    to="/"
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    home
                </Link>
                <Link
                    to="/map"
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    map
                </Link>
                <Link
                    to="/calendar"
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    calendar
                </Link>
                <Link
                    to="/graphics"
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    graphics
                </Link>
            </div>
        </div>
    </nav>
);

export default Navbar;