import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route,
    Link,
    useParams
} from "react-router-dom";

import { Redirect } from 'react-router-dom';
import Features from "../MainPage/Features/Features";
import Footer from "../Footer/Footer";
// import { ToastContainer, toast } from 'react-toastify';
import Login from "../Login/Login";
import TopNavbar from "../Navbar/TopNavbar";
import HomePage from "../Pages/HomePage";
import Register from "../Register/Register";
import Basic from "../MainPage/Services/Pack/Basic";
import Diamond from "../MainPage/Services/Pack/Diamond";
import Gold from "../MainPage/Services/Pack/Gold";
import Profile from "../MainPage/Profile/Profile";
import PageNotFound from "../MainPage/Notfound/PageNotFound";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import BuySta from "../MainPage/BuySta/BuySta";
import AdminRechart from './../Admin/AdminRechart';
import Market from "../MainPage/Market/Market";
import EditProfile from "../MainPage/Profile/EditProfile";
import Activity from "../MainPage/Profile/Activity";
import MyProfile from "../MainPage/Profile/MyProfile";
import AdminPage from "../Admin/AdminPage";
import axios from "axios";
import { API_GET_WALLET } from "../utils/const";
import ShowInfoUserController from './../controller/ShowInfoUserController';
import SignUpWithPhone from "../Register/SignupWithPhone";
import ForgetPassword from "../MainPage/ForgetPassword/ForgetPassword";
import ResetPassword from "../MainPage/ForgetPassword/ResetPassword";




const RouterScreen = () => {
    let tokens = localStorage.getItem("token");
    let dataUser = localStorage.getItem("user");
    const [data, setData] = useState({
        "sta": 0,
        "money": 0,
        "firstName": '',
        "lastName": '',
        "email": '',
    })
    let { token } = useParams()
    console.log(token);

    const getUserSta = async () => {
        if (tokens) {
            const response = await axios.post(API_GET_WALLET + tokens);
            console.log("sta ", response.data);
            if (dataUser && response && response.status === 200) {
                setData({ ...data, sta: response.data.sta, money: response.data.money, firstName: JSON.parse(dataUser).userDataDto.firstName, lastName: JSON.parse(dataUser).userDataDto.lastName, email: JSON.parse(dataUser).userDataDto.email });
            }
        }
    }
    useEffect(() => {
        getUserSta();
    }, []);

    return (
        <React.Fragment>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Router>
                {/* <ToastContainer /> */}
                <TopNavbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/SignUpWithPhone" element={<SignUpWithPhone />} />

                    {/* <Route path="/profile" element={<Profile />} /> */}
                    <Route path="/myProfile" element={<MyProfile />} />
                    <Route path="/editProfile" element={<EditProfile />} />
                    <Route path="/activityUser" element={<Activity {...data} />} />
                    <Route path="/profile/buySta" element={<BuySta />} />
                    <Route path="/forgetpassword" element={<ForgetPassword />} />
                    <Route path="/reset_password/:token" element={<ResetPassword />} />

                    <Route path="/basic" element={<Basic />} />
                    <Route path="/gold" element={<Gold />} />
                    <Route path="/diamond" element={<Diamond />} />

                    <Route path="/profile/buySta" element={<BuySta />} />

                    {/* <Route path="/admin" element={<AdminRechart />} /> */}
                    <Route path="/adminPage" element={<AdminPage />} />
                    <Route path="/admin" element={<AdminRechart />} />

                    <Route path="/market" element={<Market />} />

                    {/* <Route path="/detail/:id" element={<Basic />} /> */}

                    <Route path="*" element={<PageNotFound />} />

                </Routes>
                <Footer />
            </Router >
        </React.Fragment>

    )
}

export default RouterScreen;
