import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import AppLayout from "./components/AppLayout";
import Clients from "./pages/Clients";
import Studio from "./pages/Studio";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return(
    <Routes>
      <Route path="/" element={<AppLayout />} >
      <Route index element={<Home />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
