import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenuCard from "./components/ResMenuCard";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

const About = lazy(()=>import ("./components/About"));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path:"/about",
        element : <Suspense fallback={<h1>Loading.......</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element : <Contact/>
      },
      {
        path:"restaurant/:resId",
        element:<ResMenuCard/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);