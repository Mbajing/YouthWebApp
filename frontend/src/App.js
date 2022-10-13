import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Attendance } from "./pages/attendance/Attendance";
import { Event } from "./pages/event/Event";
import { Finance } from "./pages/finance/Finance";
import { Youth } from "./pages/youth/Youth";


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/">
      <Route index element={<Youth/>}/>
      <Route path="finance" element={<Finance/>}/>
      <Route path="attendance" element={<Attendance/>}/>
      <Route path="event" element={<Event/>}/>

     </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
