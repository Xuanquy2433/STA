import React, { useEffect, useState } from 'react'
import './EditProfile.css'
import jwt_decode from "jwt-decode";
import { API, API_PUT_EDIT_AVATAR } from '../../utils/const';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_USER_PROFILE } from './../../utils/const';


function EditProfile() {

    let decoded;
    let token = localStorage.getItem("token");
    if (token !== null) {
        decoded = jwt_decode(token);
        console.log('decoded', decoded);
    }
    const [valueImage, setValueImage] = useState({
        "image": '',
    })
    console.log("valueImage: ", valueImage);
    const upload = async (e) => {
        e.preventDefault();
        console.log("click upload");
        try {
            const response = await axios.put(API_PUT_EDIT_AVATAR, valueImage);
            if (response && response.status === 200) {
                console.log("Update success, ", response.data);
                toast.success('Update success', {
                    autoClose: 3000
                })
            };
        } catch (error) {
            toast.error('Error', {
                autoClose: 3000
            })
        }
    }

    const [dataUser, setDataUser] = useState([]);
    const getDataProfile = async (e) => {
        try {
            const response = await axios.get(API_USER_PROFILE, {
                headers: {
                    'Authorization': "Bearer " + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response && response.status === 200) {
                setDataUser(response.data);
            };
        } catch (error) {
            console.log(error.response.data)

        }
    }
    let lastName1 = dataUser.lastName
    let firtname1 = dataUser.firstName
    let full = lastName1 + " " + firtname1
    const [FN, setFN] = useState("")
    console.log("dataUser", dataUser);
    useEffect(() => {
        getDataProfile();
        setFN(firtname1)


    }, [])
    return (
        <div className='editProfile'>
            <div className="container-xl px-4 mt-4">
                {/* Account page navigation*/}
                <nav className="nav nav-borders">
                    <a
                        className="nav-link active ms-0"
                        href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
                        target="__blank"
                    >
                        Profile
                    </a>
                    <a
                        className="nav-link"
                        href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page"
                        target="__blank"
                    >
                        Billing
                    </a>
                    <a
                        className="nav-link"
                        href="https://www.bootdey.com/snippets/view/bs5-profile-security-page"
                        target="__blank"
                    >
                        Security
                    </a>
                    <a
                        className="nav-link"
                        href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"
                        target="__blank"
                    >
                        Notifications
                    </a>
                </nav>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        {/* Profile picture card*/}
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <form method='PUT' onSubmit={upload} enctype="multipart/form-data" className="card-body text-center">
                                {/* Profile picture image*/}
                                <img
                                    className="img-account-profile rounded-circle mb-2"
                                    src={API}
                                    alt=""
                                />
                                {/* Profile picture help block*/}
                                <div className="small font-italic text-muted mb-4">
                                    JPG or PNG no larger than 5 MB
                                </div>
                                {/* Profile picture upload button*/}
                                <input style={{ width: '50%' }} className="btn btn-primary" onChange={(e) => setValueImage({ image: e.target.files[0].name })} type="file" />
                                {/* Upload new image */}
                                <button className="btn btn-primary" type='submit'   >Save</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        {/* Account details card*/}
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form>
                                    {/* Form Group (username)*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">
                                            Full name
                                        </label>
                                        {/* <p
                                            className="form-control"
                                            id="inputUsername"
                                            type="text"
                                            placeholder="Enter your username"
                                          {FN}
                                        /> */}
                                        <p style={{backgroundColor : '#ddd'}} className="form-control">{dataUser.firstName} {' '} {dataUser.lastName}</p>
                                    </div>
                                    {/* Form Row*/}
                                    <div className="row gx-3 mb-3">
                                        {/* Form Group (first name)*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">
                                                First name
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputFirstName"
                                                type="text"
                                                placeholder="Enter your first name"
                                                defaultValue={dataUser.firstName}
                                            />
                                        </div>
                                        {/* Form Group (last name)*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">
                                                Last name
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputLastName"
                                                type="text"
                                                placeholder="Enter your last name"
                                                defaultValue={dataUser.lastName}
                                            />
                                        </div>
                                    </div>

                                    {dataUser.phoneNumber !== null ?
                                        <div div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">
                                                Phone Number
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputEmailAddress"
                                                type="email"
                                                readOnly
                                                defaultValue={dataUser.phoneNumber}
                                            />
                                        </div> : ''
                                    }

                                    {dataUser.email !== "NULL" ?
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">
                                                Email address
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputEmailAddress"
                                                type="email"
                                                readOnly
                                                defaultValue={dataUser.email}
                                            />
                                        </div> : ''
                                    }






                                    {/* Form Row*/}

                                    {/* Save changes button*/}
                                    <button className="btn btn-primary" type="button">
                                        Save changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default EditProfile