import React from 'react'
import './AdminRechart.css'

export default function AdminRechart() {

    const data = [
        {
            id: 1,
            uid: 1,
            gmail: "tranh@gmail.com",
            amount: 123,
            data: "20/20/2022",

        }
    ]

    return (
        <div style={{ marginTop: "100px" }}>
            <table style={{ backgroundColor: "#222222" }} className="table table-striped table-responsive-md btn-table">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User ID</th>
                        <th>Gmail</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jacob</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Jacob</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Jacob</td>
                        <td>20/20/2022</td>

                        <td>                        <button style={{ backgroundColor: "red" }} type="button" className="btn btn-deep-purple">Deep-purple</button>
                        </td>

                        <button style={{ backgroundColor: "red" }} type="button" className="btn btn-deep-purple">Deep-purple</button>

                    </tr>
                </tbody>

            </table>
        </div>
    )



}
