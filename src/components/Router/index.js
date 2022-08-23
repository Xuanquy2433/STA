import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Features from "../Features/Features";
// import { ToastContainer, toast } from 'react-toastify';
import Header from "../Header/Header";
import Login from "../Login/Login";
import TopNavbar from "../Navbar/TopNavbar";
import HomePage from "../Pages/HomePage";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const RouterScreen = () => {
    return (
        <Router>
            {/* <ToastContainer /> */}
            <TopNavbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </Router >

    )
}

export default RouterScreen;
