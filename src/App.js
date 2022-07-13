import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ExamResult from './components/Examresult';
import Result from './components/cards/Result';
import HallTicket from './components/Hallticket';

const App = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route 
                        element={
                            <>
                                <Navbar/>
                                <Outlet/>
                                <Footer/>
                            </>
                        }
                    >
                    {/* Add other pages same as below just change 'home' tag and its path */}
                        <Route path='/' element={<Home/>} />
                        <Route path='/result' element={<ExamResult/>} />
                        <Route path='/hall-ticket' element={<HallTicket/>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;
