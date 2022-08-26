import React, { useState } from 'react'
import axios from 'axios';
import { Link as Link } from 'react-router-dom'
import { API_USER_SIGNUP } from '../utils/const';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    const onSignup = async (e) => {
        e.preventDefault();
        const response = await axios.post(API_USER_SIGNUP, data);
        if (response && response.status === 200) {
            console.log("Signup success");
            alert("Sign success");
            toast.success('Register success', {
                position: 'bottom-left',
                autoClose: 3000
            })
            navigate('/login')
            setTimeout(() => {
                window.location.reload()
            }, 2500);
        };
    }


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
                                                    <p className="mb-0">Enter your email and password to register</p>
                                                </div>
                                                <div className="card-body">
                                                    <form >
                                                        <div className="input-group input-group-outline mb-3">
                                                            {/*<label class="form-label">Email</label>*/}
                                                            <input onChange={(e) =>
                                                                setData({ ...data, email: e.target.value })
                                                            } type="email" className="form-control" name="email" placeholder="Email" required />
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">
                                                            {/*<label class="form-label">Email</label>*/}
                                                            <input onChange={(e) =>
                                                                setData({ ...data, firstName: e.target.value })
                                                            } type="text" className="form-control" name="name" placeholder="First name" required />
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">
                                                            <input onChange={(e) =>
                                                                setData({ ...data, lastName: e.target.value })
                                                            } type="text" className="form-control" placeholder="Last name" name="Last name" required />
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
                                                                I agree the <a href="javascript" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                                            </label>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" onClick={(e) => {
                                                                {
                                                                    e.preventDefault()
                                                                    onSignup(e);
                                                                }
                                                            }} className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                                        </div>
                                                    </form>
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
