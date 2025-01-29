import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./rootLayout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Calendar from "./pages/Calendar";
import Graphics from "./pages/Graphics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/map',
                element: <Map />
            }, 
            {
                path: '/calendar',
                element: <Calendar />
            },
            {
                path: '/graphics',
                element: <Graphics />
            }
        ]
    }
]);

export default router;