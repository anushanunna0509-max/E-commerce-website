
import { createRoot } from 'react-dom/client'
import { App} from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Mymap } from './Map/Map.jsx'
import  AutheruserContext  from './Context/autheruserContext.jsx'
//  import { Mymap } from './Map/Map.jsx'
// import { Mymap2 } from './Components/NavBar/Pages/Map/Map.jsx'
//  import { Mymap } from './Components/NavBar/Pages/Map/Map.jsx'



createRoot(document.getElementById('root')).render(
   
   <AutheruserContext>
      <RouterProvider router={Mymap}/>
   </AutheruserContext>
  
)
