import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Attendance } from "./pages/attendance/Attendance";
import { Event } from "./pages/event/Event";
import { Finance } from "./pages/finance/Finance";
import { Youth } from "./pages/youth/Youth";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01c664',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Layout>
    <Routes>
     <Route path="/">
      <Route index element={<Youth/>}/>
      <Route path="finance" element={<Finance/>}/>
      <Route path="attendance" element={<Attendance/>}/>
      <Route path="event" element={<Event/>}/>

     </Route>
    </Routes>
    </Layout>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
