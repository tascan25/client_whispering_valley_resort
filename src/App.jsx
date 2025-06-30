import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import AboutUsComp from "./components/AboutUsComp"
import ErrorElementPage from "./components/ErrorElementPage"
import LayoutPage from "./components/LayoutPage"
import FAQPage from "./components/FAQComp"


function App() {

  const Route = createBrowserRouter([
    {
      path:'/',
      element:<LayoutPage/>,
      errorElement:<ErrorElementPage/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'about',
          element:<AboutUsComp/>
        },
        {
          path:'faq',
          element:<FAQPage/>
        }
      ]
    },
  
  ]) 


  return (
    <RouterProvider router={Route}/>
  )
}

export default App
