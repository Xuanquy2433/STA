import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { API_FORGET_PASSWORD } from '../../utils/const';

export default function ResetPassword() {

    let { token } = useParams()
    console.log(token);


    return (

        <div style={{ backgroundColor: "white", zIndex: "-1", marginTop: "60px" }}>
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

                                    <div className="card card-plain">
                                        <div className="card-header">
                                            <h4 className="font-weight-bolder">Reset Password</h4>
                                            <p className="mb-0">Enter your password to reset password </p>
                                        </div>
                                        <div className="card-body">
                                            <form >
                                                <div className="input-group input-group-outline mb-3">
                                                    {/*<label class="form-label">Username</label>*/}
                                                    <input type="text" className="form-control" name="password" placeholder="Reset Password" required />
                                                </div>
                                                <div className="form-check form-check-info text-start ps-0">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        I agree the <a href="#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Send</button>
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
