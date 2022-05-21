import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWorking from "./pages/AddWorking";
import CountingSalary from "./pages/CountingSalary";
import ManageSalary from "./pages/ManageSalary";
import SalaryReport from "./pages/SalaryReport";
import ChannellingWelcome from "./pages/ChannellingWelcome";

import AddLocationDetails from "./pages/AddLocationDetails";

import ChannelReport from './pages/ChannelReport';
import AddChanneling from "./pages/AddChanneling";

function App() {
  return (
    <Routes>
      <Route path="/salary/manage" element={<ManageSalary />} />
      <Route path="/salary/counting" element={<CountingSalary />} />
      <Route path="/salary/report" element={<SalaryReport/>} />
      <Route path="/salary/working" element={<AddWorking/>} />
      <Route path="/" element={<ChannellingWelcome/>} />
      <Route path="/channelling/welcome" element={<ChannellingWelcome/>} />
      <Route path="/location/add-location" element={<AddLocationDetails/>} />
      <Route path="/channel/report" element={<ChannelReport/>} />
      <Route path="/channel/add" element={<AddChanneling/>} />
    </Routes>
  );
}

export default App;
