import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { API_FORGET_PASSWORD, API_RESET_PASSWORD_PHONE, API_USER_SEND_OTP } from '../../utils/const';
import PhoneInput from 'react-phone-number-input';

function ForgetPasswordPhone() {
    const [data, setData] = useState({
        code: '',
        newPassword: '',
        phoneNumber: ''
    })
    const navigate = useNavigate();
    const resetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(API_RESET_PASSWORD_PHONE + "?code=" + data.code + "&newPassword=" + data.newPassword + "&phoneNumber=" + data.phoneNumber)
            if (response && response.status === 200) {
                setData(response.data)
                toast.success('Password has been successfully recovered', {
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

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
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
        <div className="card card-plain">
            <div className="card-header">
                <h4 className="font-weight-bolder">Forget password with phone number</h4>
                {/* <p className="mb-0">Enter your email to forger password </p> */}
            </div>
            <div className="card-body">
                <div >
                    <div className="input-group input-group-outline mb-3">
                        {/*<label class="form-label">Username</label>*/}
                        {/* <input onChange={onchange} type="text" className="form-control" name="phoneNumber" placeholder="Phone Number" required /> */}
                        <PhoneInput
                            style={{border:"1px solid #ddd", borderRadius:"5px",padding:"0.625rem 0.75rem", width:"100%"}}
                            defaultCountry="VN"
                            placeholder="Enter your phone number"
                            onChange={(value) => {
                                setValue(value)
                                setData({ ...data, phoneNumber: value.replace('+', '%2B') })
                            }} />
                    </div>
                    <div className="text-end mb-3">
                        <button onClick={submitOtp} type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-50 mt-4 mb-0">Submit</button>
                    </div>
                    {show && <React.Fragment>
                        <div className="input-group input-group-outline mb-3">
                            {/*<label class="form-label">Username</label>*/}
                            <input onChange={onchange} type="text" className="form-control" name="code" placeholder="OTP" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                            {/*<label class="form-label">Username</label>*/}
                            <input onChange={onchange} type="password" className="form-control" name="newPassword" placeholder="New password" required />
                        </div>
                        <div className="text-center">
                            <button onClick={resetPassword} type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Send</button>
                        </div>
                    </React.Fragment>}
                    {/* <div className="form-check form-check-info text-start ps-0">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree the <a href="#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                    </label>
                </div> */}

                </div>
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
    )
}

export default ForgetPasswordPhone