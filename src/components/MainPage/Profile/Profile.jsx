import React from 'react'
import './Profile.css'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  let showName 
  let firstName 
  let lastName 
  let email
  if (localStorage.getItem("user")) {
    let dataUser = localStorage.getItem("user");
    firstName = JSON.parse(dataUser).userDataDto.firstName
    lastName = JSON.parse(dataUser).userDataDto.lastName
    email = JSON.parse(dataUser).userDataDto.email
    showName = firstName + " " + lastName

  }

  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate('/')

    // toast.success("Logout success");
    setTimeout(() => window.location.reload(false)
      , 1000)
  }




  return (
    <div style={{ marginTop: '60px' }}>
      <div className="main-content">
        {/* Top navbar */}

        {/* Header */}
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: 600,
            backgroundImage:
              "url(https://gadgetstripe.com/wp-content/uploads/2022/07/new-mobile-technology-gadgetstripe-scaled.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                {showName ? <h1 className="display-2 text-white">Welcome <span style={{ display: 'inline', color: 'gold' }}>{showName}</span>  </h1> : <h1 className="display-2 text-white">Your Profile</h1>}
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've made with
                  your work and manage your projects or assigned tasks
                </p>
                <p className="text-white mt-0 mb-5">

                </p>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-info">
                  Transfer money
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div style={{ marginTop: '200px' }} class="modal-dialog" role="document">
                    <div class="modal-content">
                      {showName ? <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Transfer money</h2> : ''}
                      {showName ? <div class="modal-body">
                        <form class="form-inline">
                          <div class="form-group mb-2">
                            <label for="money" class="sr-only">Email</label>
                            <input type="password" class="form-control" id="money" placeholder="Enter the money" />
                          </div>
                          <div><i style={{ fontSize: '1.8em', marginLeft: '18px', marginRight: '2px' }} class="fa-solid fa-arrow-right-long"></i></div>
                          <div class="form-group mx-sm-3 mb-2">
                            <label for="idUser" class="sr-only">Password</label>
                            <input type="text" class="form-control" id="idUser" placeholder="Id user" />
                          </div>

                        </form>
                      </div> : <div class="modal-body">
                        <h2 style={{ fontSize: '2em', textAlign: 'center' }}>Please login</h2>
                      </div>}
                      <div class="modal-footer">
                        {showName ? <p style={{ marginRight: '100px', fontWeight: '500' }} >You have <span style={{ color: 'gold' }}>20 STA</span></p> : ''}

                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        {showName ? <button type="button" class="btn btn-primary">Send</button> : ''}
                     {/* {showName ? <button type="button" class="btn btn-primary">Send</button> : ''} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src="data:image/png;base64,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"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info mr-4">
                      Recharge
                    </a>
                    <button onClick={logout} className="btn btn-sm btn-default float-right">
                      Logout
                    </button>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones<span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                     {showName}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                     Web Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                     <p style={{marginTop: '10px'}}>Email:  {email}</p>
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
                      Murphy — writes, performs and records all of his own music.
                    </p>
                    <a href="#">Show more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      <a href="#!" className="btn btn-sm btn-primary">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="input-username"
                              className="form-control form-control-alternative"
                              placeholder="Username"
                              defaultValue={showName}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder={email}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              placeholder="First name"
                              defaultValue={firstName}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              placeholder="Last name"
                              defaultValue={lastName}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <input
                              id="input-address"
                              className="form-control form-control-alternative"
                              placeholder="Home Address"
                              defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              type="text"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              id="input-city"
                              className="form-control form-control-alternative"
                              placeholder="City"
                              defaultValue="New York"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <input
                              type="text"
                              id="input-country"
                              className="form-control form-control-alternative"
                              placeholder="Country"
                              defaultValue="United States"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <input
                              type="number"
                              id="input-postal-code"
                              className="form-control form-control-alternative"
                              placeholder="Postal code"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>About Me</label>
                        <textarea
                          readOnly
                          rows={4}
                          className="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          defaultValue={
                            "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                          }
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Profile