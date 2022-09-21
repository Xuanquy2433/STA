import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_VERIFY_EMAIL } from '../utils/const';

export default function VerifyEmail() {

    const navigate = useNavigate();

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');
    console.log("code ", code);

    const verifyEmail = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(API_VERIFY_EMAIL + "?code=" + code)
            if (response && response.status === 200) {
                toast.success('Verify email has been successfully', {
                    autoClose: 3000
                })
                navigate('/login')
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
                                            <div style={{ border: "1px solid #ddd" }} className="card card-plain">
                                                <div className="card-header">
                                                    <h3 style={{ textAlign: "left", margin: "0", color: "#0F0F0F" }} className="font-weight-bolder">Verify email</h3>
                                                    <p className="mb-0">Click the button to verify</p>
                                                </div>
                                                <div className="card-body">
                                                    <form >
                                                        <div className="input-group input-group-outline mb-3">
                                                            <button onClick={verifyEmail} className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Verify email</button>
                                                        </div>
                                                        <p className="mb-0">Questions? Email us at <strong style={{ color: "#2374E1" }}>contact@sta.com</strong></p>

                                                    </form>
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
