import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import AddTour from "./components/AddTour";
import UpdateTour from "./components/UpdateTour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () =>
      fetch(`http://localhost:5000/coffee`).then((res) => res.json()),
  },
  {
    path: "/addtour",
    element: <AddTour />,
  },
  {
    path: "/updateTour/:id",
    element: <UpdateTour />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
