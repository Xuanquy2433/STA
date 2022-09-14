import React, { useState } from 'react'
import './EditProfile.css'
import jwt_decode from "jwt-decode";
import { API, API_PUT_EDIT_AVATAR } from '../../utils/const';
import axios from 'axios';
import { toast } from 'react-toastify';


function EditProfile() {
    let showName
    let firstName
    let lastName
    let email
    let role
    let decoded;
    let avatar;
    let token = localStorage.getItem("token");
    let userID
    if (token !== null) {
        decoded = jwt_decode(token);
        console.log('decoded', decoded);
        firstName = decoded.firstName
        lastName = decoded.lastName
        email = decoded.email
        avatar = decoded.avatar
        role = decoded.roles
        showName = firstName + " " + lastName
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
                                    src={API + avatar}
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
                                            Username (how your name will appear to other users on the site)
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputUsername"
                                            type="text"
                                            placeholder="Enter your username"
                                            defaultValue={email}
                                        />
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
                                                defaultValue={firstName}
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
                                                defaultValue={lastName}
                                            />
                                        </div>
                                    </div>
                                    {/* Form Row        */}
                                    <div className="row gx-3 mb-3">
                                        {/* Form Group (organization name)*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName">
                                                Organization name
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputOrgName"
                                                type="text"
                                                placeholder="Enter your organization name"
                                                defaultValue="Start Bootstrap"
                                            />
                                        </div>
                                        {/* Form Group (location)*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLocation">
                                                Location
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputLocation"
                                                type="text"
                                                placeholder="Enter your location"
                                                defaultValue="San Francisco, CA"
                                            />
                                        </div>
                                    </div>
                                    {/* Form Group (email address)*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">
                                            Email address
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="Enter your email address"
                                            defaultValue={email}
                                        />
                                    </div>
                                    {/* Form Row*/}
                                    <div className="row gx-3 mb-3">
                                        {/* Form Group (phone number)*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">
                                                Phone number
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputPhone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                defaultValue="555-123-4567"
                                            />
                                        </div>
                                        {/* Form Group (birthday)*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputBirthday">
                                                Birthday
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputBirthday"
                                                type="date"
                                                name="birthday"
                                                placeholder="Enter your birthday"
                                                defaultValue="06/10/1988"
                                            />
                                        </div>
                                    </div>
                                    {/* Save changes button*/}
                                    <button className="btn btn-primary" type="button">
                                        Save changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditProfile