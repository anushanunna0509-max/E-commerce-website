import { createBrowserRouter } from "react-router-dom"
import { Layout1 } from "../Layout1"
import { Feature } from "../Auth/Feature"
import { Blog } from "../Auth/Blog"
import { Shop } from "../Auth/Shop"
import { Home1 } from "../Auth/Home1"
import { Signin } from "../Auth/Signin"
import Register from "../../../../Componnets/NavbarComp/pages/Auth/Register"
import { SignUp } from "../Auth/SignUp"



export let Mymap2=createBrowserRouter([
  {
    path:"/",
    element:<Layout1/>,
    children:[{
        path:"/",
        element:<Home1/>
  },
  {
    path:"/Feature",
    element:<Feature/>
  },
  {
    path:"/Blog",
    element:<Blog/>
  },
  {
    path:"/Shop",
    element:<Shop/>
  },
  {
    path:"/Signin",
    element:<Signin/>
  },
  {
    path:"/SignUp",
    element:<SignUp/>
  }]
  }
])