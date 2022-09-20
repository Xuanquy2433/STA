import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { API_FORGET_PASSWORD } from '../../utils/const';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ForgetPasswordEmail from './ForgetPasswordEmail';
import ForgetPasswordPhone from './ForgetPasswordPhone';

export default function ForgetPassword() {
    const [data, setData] = useState({
        email: ""
    })
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onSendPasswordForget = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_FORGET_PASSWORD + data)
            if (response && response.status === 200) {
                toast.success('Password has been sent successfully', {
                    autoClose: 3000
                })
            }
        } catch (error) {
            console.log(error.response.data)
            if (error.response.data.message) {
                toast.error(`${error.response.data.message}`, {
                    autoClose: 2000
                })
            }
            else if (error.response.data.error) {
                toast.error(`${error.response.data.error}`, {
                    autoClose: 2000
                })
            }
            else {
                toast.error('Error', {
                    autoClose: 2000
                })
            }
        }

    }

    const onchange = (e) => {
        setData(e.target.value)
        console.log("onchange: " + e.target.value);
    }

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
                                                        <Tab label="Forget with email" value="1" />
                                                        <Tab label="Forget with phone" value="2" />
                                                    </TabList>
                                                </Box>
                                                <TabPanel sx={{ padding: '0' }} value="1">
                                                    <ForgetPasswordEmail />
                                                </TabPanel>
                                                <TabPanel sx={{ padding: '0' }} value="2">
                                                    <ForgetPasswordPhone />
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
