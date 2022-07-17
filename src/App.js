import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ExamResult from "./components/Examresult";
import HallTicket from "./components/Hallticket";
import FeeVoucher from "./components/Fees/FeeVoucher";
import Information from "./components/Information";
import ProgramInfo from "./components/ProgramInfo";
import SearchSub from "./components/SearchSub";
import MySubjects from "./components/MySubjects";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
                <Footer />
              </>
            }
          >
            {/* Add other pages same as below just change 'home' tag and its path */}
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<ExamResult />} />
            <Route path="/hall-ticket" element={<HallTicket />} />
            <Route path="/fee-voucher" element={<FeeVoucher />} />
            <Route
              path="/information/program-information"
              element={<ProgramInfo />}
            />
            <Route path="/information/search-subject" element={<SearchSub />} />
            <Route path="/information/my-subject" element={<MySubjects />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
