import { createBrowserRouter } from "react-router-dom";
import Home from "../../Conmopent/Home/Home/Home";
import BrandDetails from "../../Conmopent/Page/BrandDetails/BrandDetails";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brand/:id",
        element: <BrandDetails></BrandDetails>,
        loader: async ({ params }) => {
          const data = fetch(
            `http://localhost:5000/brand-details/${params.id}`
          );
          return data;
        },
      },
    ],
  },
]);
