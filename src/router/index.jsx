import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Loayaut from "../loayaut/Loayaut";
import Private from "../loayaut/Private";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    //main url
{
path: '/',
element: <Loayaut/>,
//chilldren urls
children: [
{index:true,element:<Home/>},
//rutas privadas
{path:'/dashboard', element: <Private/>,
children:[

    {index:true,element:<Dashboard/>},
]}
]
}

//end main
])