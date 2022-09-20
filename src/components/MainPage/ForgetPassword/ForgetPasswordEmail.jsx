import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { API_FORGET_PASSWORD } from '../../utils/const';

function ForgetPasswordEmail() {
    const [data, setData] = useState({
        email: ""
    })
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
        <div>
            <div className="card card-plain">
                <div className="card-header">
                    <h4 className="font-weight-bolder">Forget password with email </h4>
                    {/* <p className="mb-0">Enter your email to forger password </p> */}
                </div>
                <div className="card-body">
                    <form >
                        <div className="input-group input-group-outline mb-3">
                            {/*<label class="form-label">Username</label>*/}
                            <input onChange={onchange} type="text" className="form-control" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-check form-check-info text-start ps-0">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree the <a href="#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                            </label>
                        </div>
                        <div className="text-center">
                            <button onClick={onSendPasswordForget} type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Send</button>
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
    )
}

export default ForgetPasswordEmail