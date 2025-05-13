import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { Error } from "./pages/Error";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./ui/MovieDetails";
import { getMoviesDetails } from "./api/GetMoiveDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader : getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action : contactData
        },
        // {
        //   path: "*",
        //   element: <Error />
        // }
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element= {<Home/> }/>
  //       <Route path="/about" element= {<About/> }/>
  //       <Route path="/movie" element= {<Movie/> }/>
  //       <Route path="/contact" element= {<Contact/> }/>

  //     </>
  //   )
  // )

  return <RouterProvider router={router} />;
};

export default App;
