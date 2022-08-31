import React, { useEffect, useState } from 'react'
import './Profile.css'
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { API_BUY_STA, API_GET_WALLET, API_SEND_STA } from '../../utils/const';
import { putAPI } from '../../utils/api';

function Profile() {
  let showName
  let firstName
  let lastName
  let email
  let role
  if (localStorage.getItem("user")) {
    let dataUser = localStorage.getItem("user");
    firstName = JSON.parse(dataUser).userDataDto.firstName
    lastName = JSON.parse(dataUser).userDataDto.lastName
    email = JSON.parse(dataUser).userDataDto.email
    role = JSON.parse(dataUser).userDataDto.role

    showName = firstName + " " + lastName
  }
  const navigate = useNavigate();

  console.log(localStorage.getItem("user"));
  const [sta, setSta] = useState('');
  const [money, setMoney] = useState('');
  let token = localStorage.getItem("token");

  const [sendData, setSendData] = useState({
    receiver: "",
    sta: "",
    token: token
  })

  const [dataBuy, setDataBuy] = useState({
    sta: "",
    token: token
  })

  console.log(sendData);
  const sendSTA = async (e) => {
    e.preventDefault()
    console.log(e);

    if (sendData.receiver == email) {
      toast.error("You can't transfer money to yourself", {
        autoClose: 2000
      })
      getUserSta()
    } else if (sendData.sta > sta) {
      toast.error("You don't have enough money", {
        autoClose: 2000
      })
      getUserSta()
    } else {
      const response = await axios.put(API_SEND_STA + "?receiver=" + sendData.receiver + "&sta=" + sendData.sta + "&token=" + sendData.token)
      toast.success('Send success', {
        autoClose: 2000
      })
      getUserSta()
    }
  }

  const checkSTA = money / 10000
  console.log(checkSTA);
  const buySTA = async (e) => {
    e.preventDefault()
    if (dataBuy.sta > checkSTA) {
      toast.warning("You don't have enough money", {
        autoClose: 2000
      })
      getUserSta()
    } else {
      const response = await axios.put(API_BUY_STA + "?sta=" + dataBuy.sta + "&token=" + dataBuy.token)
      toast.success('Buy success', {
        autoClose: 2000
      })
      getUserSta()
    }

  }

  const onChangeText = (event) => {
    console.log('onChangeText', event)
    setSendData({ ...sendData, [event.target.name]: event.target.value })
  }

  const getUserSta = async () => {
    console.log(token);
    const response = await axios.post(API_GET_WALLET + token);
    console.log("sta ", response.data);
    if (response && response.status === 200) {
      setSta(response.data.sta);
      setMoney(response.data.money)
    }
  }


  useEffect(() => {
    getUserSta();
  }, []);

  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate('/')

    toast.success("Logout success");
    setTimeout(() => window.location.reload(false)
      , 1000)
  }

  const data = [
    {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }, {
      name: "aansn"
    }
  ]

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
                {role === 'user' || role === undefined ? <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've made with
                  your work and manage your projects or assigned tasks
                </p> : <p className="text-white mt-0 mb-5">
                  This is admin page. You can see the progress you've made with
                  your work and manage your projects or assigned tasks
                </p>}
                <div className="text-white mt-0 mb-5">

                </div>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-info">
                  Transfer money
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div style={{ marginTop: '200px' }} class="modal-dialog" role="document">
                    <div class="modal-content">
                      {showName ? <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Transfer money</h2> : ''}
                      {showName ? <div class="modal-body">
                        <form method='PUT' class="form-inline">
                          <div class="form-group mb-2">
                            <label for="money" class="sr-only">STA</label>
                            <input onChange={onChangeText} type="number" name="sta" class="form-control" id="money" placeholder="Enter the money" />
                          </div>
                          <div><i style={{ fontSize: '1.8em', marginLeft: '18px', marginRight: '2px' }} class="fa-solid fa-arrow-right-long"></i></div>
                          <div class="form-group mx-sm-3 mb-2">
                            <label for="idUser" class="sr-only">Email</label>
                            {/* <input onChange={onChangeText}  name="token" type="text" class="form-control" id="idUser" placeholder="Token" /> */}

                            <input onChange={onChangeText} name="receiver" type="text" class="form-control" id="idUser" placeholder="Email" />
                          </div>

                        </form>
                      </div> : <div class="modal-body">
                        <h2 style={{ fontSize: '2em', textAlign: 'center' }}>Please login</h2>
                      </div>}
                      <div class="modal-footer">
                        {showName ? <p style={{ marginRight: '100px', fontWeight: '500' }} >You have <span style={{ color: 'gold' }}>{sta} STA</span></p> : ''}

                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        {showName ? <button onClick={sendSTA} type="submit" data-dismiss="modal" class="btn btn-primary">Send</button> : ''}

                        {/* {showName ? <button type="button" class="btn btn-primary">Send</button> : ''} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8I5BeI4zllg2UWAReCvkQeKcD1NkUgQyni23sgAkUo3qh5q2tdmgtpX2NBwFL_08G0U&usqp=CAU"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <p data-toggle="modal" data-target="#buySTA" className="btn btn-sm btn-info mr-4">
                      Buy STA
                    </p>

                    <div class="modal fade" id="buySTA" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div style={{ marginTop: '200px' }} class="modal-dialog" role="document">
                        <div class="modal-content">
                          {showName ? <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Buy STA</h2> : ''}
                          {showName ? <div class="modal-body">
                            <form method='PUT' class="form-inline">
                              <div class="form-group mb-2">
                                <label for="money" class="sr-only">STA</label>
                                <input style={{ width: '470px' }} onChange={(e) =>
                                  setDataBuy({ ...dataBuy, sta: e.target.value })
                                } type="number" name="sta" class="form-control" id="money" defaultValue={''} placeholder="Enter the STA" />
                              </div>
                            </form>
                          </div> : <div class="modal-body">
                            <h2 style={{ fontSize: '2em', textAlign: 'center' }}>Please login</h2>
                          </div>}
                          <div class="modal-footer">
                            {showName ? <p style={{ marginRight: '100px', fontWeight: '500' }} ><span style={{ color: 'gold' }}>1 STA</span> = 10.000 money </p> : ''}

                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                            {showName ? <button onClick={buySTA} type="submit" data-dismiss="modal" class="btn btn-primary">Buy</button> : ''}

                            {/* {showName ? <button type="button" class="btn btn-primary">Send</button> : ''} */}
                          </div>
                        </div>
                      </div>
                    </div>



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
                      <p style={{ marginTop: '10px' }}>Email:  {email}</p>
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

            {
              role == "user" || role == undefined ?
                <div className="col-xl-8 order-xl-1">
                  <div className="card bg-secondary shadow">
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0" style={{ color: "#333", left: "0", position: "absolute" }}>STA: <span style={{ color: 'gold', fontWeight: '600', fontSize: '1.2em' }}> {sta}</span></h3>
                        </div>
                        <div className="col-4 text-right">
                          <p data-toggle="modal" data-target="#rechargeMoney" className="btn btn-sm btn-primary">
                            Recharge money
                          </p>

                          <div class="modal fade" id="rechargeMoney" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div style={{ marginTop: '200px' }} class="modal-dialog" role="document">
                              <div class="modal-content">
                                {showName || role !== 'admin' ? <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Recharge money</h2> : ''}
                                {showName || role !== 'admin' ? <div class="modal-body">
                                  <form>
                                    <div class="form-row">
                                      <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                      </div>
                                      <div class="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label style={{ textAlign: 'left' }} for="inputAddress">Address</label>
                                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>

                                  </form>
                                </div> : <div class="modal-body">
                                  <h2 style={{ fontSize: '2em', textAlign: 'center' }}>You are admin ! </h2>
                                </div>}
                                <div class="modal-footer">
                                  {/* {showName ? <p style={{ marginRight: '100px', fontWeight: '500' }} ><span style={{ color: 'gold' }}>1 STA</span> = 10.000 money </p> : ''} */}

                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                                  {showName || role !== 'admin' ? <button onClick={buySTA} type="submit" data-dismiss="modal" class="btn btn-primary">Send</button> : ''}

                                  {/* {showName ? <button type="button" class="btn btn-primary">Send</button> : ''} */}
                                </div>
                              </div>
                            </div>
                          </div>


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
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label style={{ color: 'gold' }}
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  STA
                                </label>
                                <input
                                  style={{ color: 'gold' }}
                                  type="text"
                                  id="input-last-name"
                                  className="form-control form-control-alternative"
                                  placeholder="Last name"
                                  defaultValue={sta}
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label style={{ color: 'gold' }}
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Money
                                </label>
                                <input
                                  style={{ color: 'gold' }}
                                  type="text"
                                  id="input-last-name"
                                  className="form-control form-control-alternative"
                                  placeholder="Last name"
                                  defaultValue={money}
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
                                "A professional developer"
                              }
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                :
                <div style={{ backgroundColor: "#222222", padding: "0", borderRadius: "5px" }} className="col-xl-8 order-xl-1">

                  <div style={{ height: "650px", borderRadius: "5px" }} id="style-1" className="table-wrapper-scroll-y my-custom-scrollbar" >
                    <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">UID</th>
                          <th style={{ textAlign: "center" }} scope="col">ID</th>
                          <th style={{ textAlign: "center" }} scope="col">User ID</th>
                          <th style={{ textAlign: "center" }} scope="col">GMAIL</th>
                          <th style={{ textAlign: "center" }} scope="col" >
                            Amount
                          </th>
                          <th style={{ textAlign: "center" }} scope="col" >
                            date
                          </th>
                          <th style={{ textAlign: "center" }} scope="col">Status</th>
                          <th style={{ textAlign: "center" }} scope="col">Status</th>

                        </tr>
                      </thead>

                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td style={{ color: "#8898aa" }} scope="row">{item.name}</td>
                            <td style={{ textAlign: "center", color: "#8898aa " }} className="text-muted">Sent to</td>
                            <td style={{ textAlign: "center" }} className="text-muted">{item.name}</td>
                            <td style={{ textAlign: "center" }} className="text-muted">a</td>
                            <td style={{ textAlign: "center" }} className="text-muted ">{item.name}</td>
                            <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted">{item.name}</td>
                            <td style={{ textAlign: "center" }} className="text-muted">
                              <button style={{ backgroundColor: "#3F51B5", color: "#FFFFFF", padding: "4px 8px", margin: "0" }} type="button" className="btn">Confirm</button>
                            </td>
                            <td style={{ textAlign: "center" }} className="text-muted">
                              <button style={{ backgroundColor: "#78909C", color: "#FFFFFF", padding: "4px 8px", margin: "0" }} type="button" className="btn">Refuse</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>


            }
          </div>
        </div>

      </div>



    </div>
  )
}

export default Profile