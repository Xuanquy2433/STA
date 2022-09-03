import React from 'react'
import Moment from 'react-moment';


function LogUser({ logs }) {
    return (
        <React.Fragment>
            <div class="modal-body">
                <div style={{ backgroundColor: "#222222", padding: "0", borderRadius: "5px" }} className="col-xl-8 order-xl-1">
                    <div style={{ height: "550px", borderRadius: "5px" }} id="style-1" className="table-wrapper-scroll-y my-custom-scrollbar" >
                        <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                            <thead>
                                <tr>
                                    {/* <th scope="col">UID</th> */}
                                    <th style={{ textAlign: "center" }} scope="col">Status</th>
                                    <th style={{ textAlign: "center" }} scope="col">STA</th>
                                    <th style={{ textAlign: "center" }} scope="col">Money</th>
                                    <th style={{ textAlign: "center" }} scope="col">createdDate</th>
                                    <th style={{ textAlign: "center" }} scope="col">Type</th>
                                    {/* <th style={{ textAlign: "center" }} scope="col">Email</th> */}
                                </tr>
                            </thead>

                            <tbody>
                                {logs.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ color: "#8898aa", textAlign: 'center' }} scope="row">{item.status}</td>
                                        <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted">{item.sta}</td>
                                        <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted">{item.money}</td>
                                        <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></td>
                                        {/* <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted">{item.user.firstName} {item.user.lastName}</td> */}
                                        <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted">{item.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LogUser