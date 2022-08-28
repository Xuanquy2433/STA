import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { API_GET_LOGS } from '../../utils/const';
import { getAPI } from './../../utils/api';
function Transaction() {

    const [dataLogs, setDataLogs] = useState([])

    const fetchAPI = async () => {
        const result = await getAPI(API_GET_LOGS)
        if (result) {
            setDataLogs(result)
        }
        console.log("logs", result);
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div>
            <div className="s-heading">
                <h1 style={{ marginTop: '60px' }}>Transactions</h1>
            </div>
            <div className="wrapper rounded">
                <div className="row mt-2 pt-2">
                    <div className="col-md-6" id="income">
                        <div className="d-flex justify-content-start align-items-center">
                            <p className="fa fa-long-arrow-down" />
                            <p className="text mx-3">Income</p>
                            <p className="text-white ml-4 money">$9,758.23</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-md-end align-items-center">
                            <div className="fa fa-long-arrow-up" />
                            <div className="text mx-3">Expense</div>
                            <div className="text-white ml-4 money">$961.23</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <ul className="nav nav-tabs w-75">
                        <li className="nav-item">
                            {" "}
                            <a className="nav-link active" href="#history">
                                History
                            </a>{" "}
                        </li>
                        {/* <li className="nav-item">
                            {" "}
                            <a className="nav-link" href="#2">
                                Reports
                            </a>{" "}
                        </li> */}
                    </ul>{" "}
                    <button style={{ background: "linear-gradient(238.01deg, rgb(145, 1, 165) -1.4%, rgb(255, 86, 122) 54.09%, rgb(255, 153, 0) 93.78%)" }} className="btn btn-primary">New Transaction</button>
                </div>
                <div id="style-1" className="table-wrapper-scroll-y my-custom-scrollbar" >
                    <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">UID</th>
                                <th style={{ textAlign: "center" }} scope="col">Message</th>
                                <th style={{ textAlign: "center" }} scope="col">Receiver ID</th>
                                <th style={{ textAlign: "center" }} scope="col">Date</th>
                                <th style={{ textAlign: "center" }} scope="col">Status</th>
                                <th className="d-flex justify-content-end " scope="col" >
                                    Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {dataLogs.map((item, index) => (
                                <tr key={index}>
                                    <td scope="row">{item.user.id}</td>
                                    <td style={{ textAlign: "center" }} className="">Sent to</td>
                                    <td style={{ textAlign: "center" }} className="text-muted">{item.receiverId}</td>
                                    <td style={{ textAlign: "center" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></td>
                                    <td style={{ textAlign: "center" }} className="text-muted">{item.status}</td>
                                    <td className="d-flex justify-content-end align-items-center">$ {item.sta}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-between align-items-center results">
                    {" "}
                    {/* <span className="pl-md-3">
                        Showing<b className="text-white"> 1-7 0f 200 </b> trasactions
                    </span> */}
                    {/* <div className="pt-3">
                        <div aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    {" "}
                                    <a className="page-link" href="#2" aria-label="Previous">
                                        {" "}
                                        <span aria-hidden="true">&lt;</span>{" "}
                                    </a>{" "}
                                </li>
                                <li className="page-item">
                                    {" "}
                                    <a className="page-link" href="#2" aria-label="Next">
                                        {" "}
                                        <span aria-hidden="true">&gt;</span>
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>


    )
}

export default Transaction