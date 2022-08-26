import axios from 'axios';
import React, { useState } from 'react'
import { Link as Link } from 'react-router-dom'


export default function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const onLogin = async (e) => {
        // const reponse = await axios.post(API_USER_LOGIN, data);
        const response = await axios.post(data);
        if (response && response.status === 200) {
            console.log("Login sucsess");
            alert("dang nhap thanh cong");
            // toast.success("Login sucsess");
            localStorage.setItem("token", response?.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    };


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
                                        <div className="card card-plain">
                                            <div className="card-header">
                                                <h4 className="font-weight-bolder">Sign In</h4>
                                                <p className="mb-0">Enter your email and password to Sign In</p>
                                            </div>
                                            <div className="card-body">
                                                <form method="post">
                                                    <div className="input-group input-group-outline mb-3">
                                                        {/*<label class="form-label">Username</label>*/}
                                                        <input onChange={(e) => {
                                                            setData({ ...data, username: e.target.value })
                                                            console.log('username value: ', data.username);
                                                        }
                                                        } type="text" className="form-control" name="username" placeholder="Username" required />
                                                    </div>
                                                    {/*<label style="position: relative; bottom: -10px ; color: #344767; font-weight: 700; font-size: 14px" class="form-label">Password</label>*/}
                                                    <div className="input-group input-group-outline mb-3">
                                                        <input onChange={(e) =>
                                                            setData({ ...data, username: e.target.value })
                                                        } type="password" className="form-control" placeholder="Password" name="password" required />
                                                    </div>
                                                    <div className="form-check form-check-info text-start ps-0">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I agree the <a href="#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                                        </label>
                                                    </div>
                                                    <div className="text-center">
                                                        <button onClick={(e) => {
                                                            onLogin(e);
                                                        }} type="submit" name="action" value="register" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign In</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                                <p className="mb-2 text-sm mx-auto">
                                                    Don't have an account?
                                                    <Link to="/register">
                                                        <span style={{ fontSize: '.876rem' }} className="text-primary text-gradient font-weight-bold"> Sign Up</span>
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
    )
}
