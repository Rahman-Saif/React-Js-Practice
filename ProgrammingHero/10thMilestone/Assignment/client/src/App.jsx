
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home";
import AddTour from "./components/AddTour";
import UpdateTour from "./components/UpdateTour";

function App() {

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtour" element={<AddTour />} />
          <Route path="/updateTour" element={<UpdateTour />} />
        </Routes>
      
    </>
  );
}

export default App
