import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { API_USER_LOGIN } from '../utils/const';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginEmail from './LoginEmail';
import LoginPhone from './LoginPhone';

export default function Login() {
    const navigate = useNavigate();
    // const [data, setData] = useState({
    //     email: "",
    //     password: "",
    // });

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");

    useEffect(() => {
        if (user && token) {
            navigate('/')
        }
    })
    // const onLogin = async (e) => {
    //     e.preventDefault();
    //     if (data.email === '') {
    //         toast.error('Email cannot be null', {
    //             autoClose: 2000
    //         })
    //     } else if (data.password === '') {
    //         toast.error('Password cannot be null', {
    //             autoClose: 2000
    //         })
    //     }
    //     else if (data.password.length < 8) {
    //         toast.error('Password must have at least 8 characters', {
    //             autoClose: 2000
    //         })
    //     }
    //     else {
    //         try {
    //             const response = await axios.post(API_USER_LOGIN, data);
    //             if (response && response.status === 200) {
    //                 console.log("Login success, ", response.data);
    //                 // alert("Login success");
    //                 localStorage.setItem("token", response?.data.token);
    //                 localStorage.setItem("user", JSON.stringify(response.data));
    //                 toast.success('Login success', {
    //                     autoClose: 3000
    //                 })
    //                 navigate('/')
    //                 // setTimeout(() => {
    //                 //     window.location.reload()
    //                 // }, 1000);
    //             };
    //         } catch (error) {
    //             if (error.response && error.response.data) {
    //                 console.log(error.response.data)
    //                 toast.error(`${error.response.data.message}`, {
    //                     autoClose: 2000
    //                 })
    //             }
    //             else {
    //                 toast.error('Error', {
    //                     autoClose: 2000
    //                 })
    //             }
    //         }
    //     }
    // }
    return (
        <div style={{ backgroundColor: "white", zIndex: "-1", marginTop: "60px" }}>
            <div>
                <div className="container position-sticky z-index-sticky top-0">
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
                <main className="main-content  mt-0">
                    <section>
                        <div className="page-header min-vh-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                        <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ backgroundImage: 'url("./assets/img/illustrations/illustration-signin.jpg")', backgroundSize: 'cover' }}>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                        <Box sx={{ width: '100%' }}>
                                            <TabContext value={value} >
                                                <Box >
                                                    <TabList textColor="secondary"
                                                        indicatorColor="secondary"
                                                        aria-label="secondary tabs example" onChange={handleChange} >
                                                        <Tab label="Login with email" value="1" />
                                                        <Tab label="Login with phone" value="2" />
                                                    </TabList>
                                                </Box>
                                                <TabPanel sx={{ padding: '0' }} value="1">
                                                    <LoginEmail />
                                                </TabPanel>
                                                <TabPanel sx={{ padding: '0' }} value="2">
                                                    <LoginPhone />
                                                </TabPanel>
                                            </TabContext>
                                        </Box>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
