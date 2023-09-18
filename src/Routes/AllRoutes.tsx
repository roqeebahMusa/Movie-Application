import {createBrowserRouter} from "react-router-dom"
import Weblayouts from "../Components/Layouts/Weblayouts"
import Homepage from "../Pages/Homepage"
import Detailed from "../Pages/Detailed"


const AllRoutes = createBrowserRouter ([
    {
        path: "/",
        element: <Weblayouts />,

        children: [
            {
                index: true,
                element: <Homepage />,
            },           
        ]
    },

    {
        path: "/detailed/:id",
        element: <Detailed />
    },
])

export default AllRoutes