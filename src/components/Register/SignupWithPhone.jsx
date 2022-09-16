import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { API_USER_SEND_OTP, API_USER_SIGNUP, API_USER_SIGNUP_PHONE } from '../utils/const';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

export default function SignUpWithPhone() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        code: '',
        firstName: "",
        lastName: "",
        password: "",
        phoneNumber: ""
    });
    console.log('data', data);
    const [show, setShow] = useState(false);

    const onSignup = async (e) => {
        e.preventDefault();
        if (data.email === '') {
            toast.error('Email cannot be null', {
                autoClose: 2000
            })
        }
        else if (data.firstName === '') {
            toast.error('First name cannot be null', {
                autoClose: 2000
            })
        }
        else if (data.lastName === '') {
            toast.error('Last name cannot be null', {
                autoClose: 2000
            })
        }
        else if (data.password === '') {
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
                const response = await axios.post(API_USER_SIGNUP_PHONE, data);
                if (response && response.status === 200) {
                    toast.success('Register success', {
                        autoClose: 3000
                    })
                    navigate('/login')
                    setTimeout(() => {
                        window.location.reload()
                    }, 2500);
                };
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
    }
    const [value, setValue] = useState('');
    const submitOtp = async () => {
        if (value) {
            try {
                if (value) {
                    const response = await axios.get(API_USER_SEND_OTP + value.replace('+', '%2B'));
                    if (response && response.status === 200) {
                        toast.success('Send OTP success', {
                            autoClose: 3000
                        })
                    };
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
            setTimeout(() => {
                setShow(!show)
            }, 1200);

        }
        else {
            toast.error('Please enter phone number ', {
                autoClose: 2000
            })
        }
    }
    // useEffect(() => {
    // }, [isChecked]);
    return (
        <div>
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
                                            <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ backgroundImage: 'url("./assets/img/illustrations/illustration-signup.jpg")', backgroundSize: 'cover' }}>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                            <div className="card card-plain">
                                                <div className="card-header">
                                                    <h4 className="font-weight-bolder">Sign Up</h4>
                                                    <p className="mb-0">Enter your phone and password to register</p>
                                                </div>
                                                <div className="card-body">
                                                    <div className="input-group input-group-outline mb-0">
                                                        {/* <input type="text" defaultValue={'+84'} onChange={(e) =>
                                                            setData({ ...data, phoneNumber: e.target.value })
                                                        } className="form-control" placeholder="Enter your phone" required /> */}
                                                        <PhoneInput
                                                            defaultCountry="VN"
                                                            placeholder="Enter your phone number"
                                                            onChange={(value) => {
                                                                setValue(value)
                                                                setData({ ...data, phoneNumber: value })
                                                            }} />
                                                    </div>
                                                    <div className="text-end mb-3">
                                                        <button onClick={submitOtp} type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-50 mt-4 mb-0">Submit</button>
                                                    </div>
                                                    {/* <button onClick={() => setIsChecked(prev => !prev)}>Click</button> */}
                                                    {show &&
                                                        <form >
                                                            <div className="input-group input-group-outline mb-3">
                                                                <input onChange={(e) =>
                                                                    setData({ ...data, code: e.target.value })
                                                                } type="text" className="form-control" name="name" placeholder="Otp Code" required />
                                                            </div>
                                                            <div className="input-group input-group-outline mb-3">
                                                                <input onChange={(e) =>
                                                                    setData({ ...data, firstName: e.target.value })
                                                                } type="text" className="form-control" name="name" placeholder="First name" required />
                                                            </div>
                                                            <div className="input-group input-group-outline mb-3">
                                                                <input onChange={(e) =>
                                                                    setData({ ...data, lastName: e.target.value })
                                                                } type="text" className="form-control" placeholder="Last name" name="Last name" required />
                                                            </div>
                                                            <div className="input-group input-group-outline mb-3">
                                                                <input onChange={(e) =>
                                                                    setData({ ...data, password: e.target.value })
                                                                } type="password" className="form-control" placeholder="Password" name="password" required />
                                                            </div>
                                                            <div className="form-check form-check-info text-start ps-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                    I agree the <a href="javascript" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                                                </label>
                                                            </div>
                                                            <div className="text-center">
                                                                <button type="submit" onClick={(e) => {
                                                                    onSignup(e);
                                                                }} className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                                            </div>
                                                        </form>
                                                    }
                                                    {/* <form >
                                                        <div className="input-group input-group-outline mb-3">
                                                            <input onChange={(e) =>
                                                                setData({ ...data, email: e.target.value })
                                                            } type="email" className="form-control" name="email" placeholder="Email" required />
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">
                                                            <input onChange={(e) =>
                                                                setData({ ...data, firstName: e.target.value })
                                                            } type="text" className="form-control" name="name" placeholder="First name" required />
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">
                                                            <input onChange={(e) =>
                                                                setData({ ...data, lastName: e.target.value })
                                                            } type="text" className="form-control" placeholder="Last name" name="Last name" required />
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">
                                                            <input onChange={(e) =>
                                                                setData({ ...data, password: e.target.value })
                                                            } type="password" className="form-control" placeholder="Password" name="password" required />
                                                        </div>
                                                        <div className="form-check form-check-info text-start ps-0">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                I agree the <a href="javascript" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                                            </label>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" onClick={(e) => {
                                                                onSignup(e);
                                                            }} className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                                        </div>
                                                    </form> */}

                                                </div>
                                                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                                    <p className="mb-2 text-sm mx-auto">
                                                        Already have an account?
                                                        <Link to="/login">
                                                            <span style={{ fontSize: '.876rem' }} className="text-primary text-gradient font-weight-bold">Sign in</span>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
