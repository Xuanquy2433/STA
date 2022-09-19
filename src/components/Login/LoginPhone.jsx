import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { API_USER_LOGIN, API_USER_LOGIN_PHONE, API_USER_SEND_OTP } from '../utils/const';
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input';

function LoginPhone() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        phoneNumber: "",
        password: "",
    });
    const onLogin = async (e) => {
        e.preventDefault();
        if (data.phone === '') {
            toast.error('Phone number cannot be null', {
                autoClose: 2000
            })
        } else if (data.password === '') {
            toast.error('Password cannot be null', {
                autoClose: 2000
            })
        }
        else if (data.password.length < 8) {
            toast.error('Password must have at least 8 characters', {
                autoClose: 2000
            })
        }
        else {
            try {
                const response = await axios.post(API_USER_LOGIN_PHONE, data);
                if (response && response.status === 200) {
                    console.log("Login success, ", response.data);
                    // alert("Login success");
                    localStorage.setItem("token", response?.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data));
                    toast.success('Login success', {
                        autoClose: 3000
                    })
                    navigate('/')
                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 1000);
                };
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
    }
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const submitOtp = async (e) => {
        e.preventDefault()
        if (value) {
            try {
                if (value) {
                    const response = await axios.get(API_USER_SEND_OTP + value.replace('+', '%2B'));
                    if (response && response.status === 200) {
                        toast.success('Send OTP success', {
                            autoClose: 3000
                        })
                    };
                    setTimeout(() => {
                        setShow(!show)
                    }, 1200);
                }

            } catch (error) {
                if (error.response && error.response.data) {
                    console.log('error ', error.response)
                    toast.error(`${error.response.data}`, {
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
        else {
            toast.error('Please enter phone number ', {
                autoClose: 2000
            })
        }
    }
    return (
        <div>
            <div className="card card-plain">
                <div className="card-header">
                    <h4 className="font-weight-bolder">Sign In</h4>
                    {/* <p className="mb-0">Enter your phone and password to Sign In</p> */}
                </div>
                <div className="card-body">
                    <form >
                        <div className="input-group input-group-outline mb-4">
                            {/*<label class="form-label">Username</label>*/}
                            {/* <input onChange={(e) => {
                                setData({ ...data, phone: e.target.value })
                                console.log('username value: ', data.username);
                            }
                            } type="text" className="form-control" name="username" placeholder="Phone Number" required /> */}
                            <PhoneInput
                                defaultCountry="VN"
                                placeholder="Enter your phone number"
                                onChange={(value) => {
                                    setValue(value)
                                    setData({ ...data, phoneNumber: value })
                                }} />
                        </div>
                        {/*<label style="position: relative; bottom: -10px ; color: #344767; font-weight: 700; font-size: 14px" class="form-label">Password</label>*/}
                        <div className="input-group input-group-outline mb-3">
                            <input onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            } type="password" className="form-control" placeholder="Password" name="password" required />
                        </div>
                        <div className="form-check form-check-info text-start ps-0">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree the <Link to={'#'} className="text-dark font-weight-bolder">Terms and Conditions</Link>
                            </label>
                        </div>
                        <div className="text-center">
                            <button onClick={(e) => {
                                e.preventDefault()
                                onLogin(e);
                            }} type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign In</button>
                        </div>

                    </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-2 text-sm mx-auto">
                        Don't have an account?
                        <Link to="/register">
                            <span style={{ fontSize: '.876rem' }} className="text-primary text-gradient font-weight-bold"> Sign Up </span>
                        </Link>
                    </p>
                    <p className="mb-2 text-sm mx-auto">
                        or continue with
                        <Link to="/SignUpWithPhone">
                            <span style={{ fontSize: '.876rem' }} className="text-primary text-gradient font-weight-bold"> Phone Number</span>
                        </Link>
                    </p>

                    <p className="mb-2 text-sm mx-auto">
                        <Link to="/forgetpassword">
                            <span style={{ fontSize: '.876rem' }} className="text-primary text-gradient font-weight-bold"> Forget Password?</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPhone