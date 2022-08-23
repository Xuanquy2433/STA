import React from 'react'


export default function Login() {

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
                                                <form action="Register" method="post">
                                                    <div className="input-group input-group-outline mb-3">
                                                        {/*<label class="form-label">Email</label>*/}
                                                        <input type="email" className="form-control" name="email" placeholder="Email" required />
                                                    </div>
                                                    <div className="input-group input-group-outline mb-3">
                                                        {/*<label class="form-label">Username</label>*/}
                                                        <input type="text" className="form-control" name="username" placeholder="username" required />
                                                    </div>
                                                    {/*<label style="position: relative; bottom: -10px ; color: #344767; font-weight: 700; font-size: 14px" class="form-label">Password</label>*/}
                                                    <div className="input-group input-group-outline mb-3">
                                                        <input type="password" className="form-control" placeholder="Password" name="password" required />
                                                    </div>
                                                    <div className="form-check form-check-info text-start ps-0">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                                        </label>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" name="action" value="register" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                                <p className="mb-2 text-sm mx-auto">
                                                    Already have an account?
                                                    <a href="./Login.jsp" className="text-primary text-gradient font-weight-bold">Sign in</a>
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
