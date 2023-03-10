import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Route/Route";

function App() {
  return (
    <div className=" max-w-[1280px]  lg:mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
