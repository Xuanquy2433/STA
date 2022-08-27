import React from 'react'


const data = [
    {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$558.8"

    },
    {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$5833333.8"

    }, {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$45358.8"
    },
    {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$45358.8"
    },
    {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$45358.8"
    }, {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$45358.8"
    }, {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$45358.8"
    }, {
        idsend: "aaaa33213121",
        idtake: "ababebbe1234",
        date: "	12 Jul 2020, 12:30 PM",
        amount: "$45358.8"
    }
]
function Transaction() {
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
                    <button style={{background: "linear-gradient(238.01deg, rgb(145, 1, 165) -1.4%, rgb(255, 86, 122) 54.09%, rgb(255, 153, 0) 93.78%)"}} className="btn btn-primary">New Transaction</button>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table table-darkN table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Id send</th>
                                <th scope="col">Mode</th>
                                <th scope="col">Id take</th>
                                <th  className="" scope="col">Date</th>

                                <th className="d-flex justify-content-end " scope="col" >
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td scope="row">
                                        {item.idsend}
                                    </td>
                                    <td className="">
                                        to
                                    </td>
                                    <td className="text-muted">{item.idtake}</td>
                                    <td className="text-muted">{item.date}</td>

                                    <td className="d-flex justify-content-end align-items-center">
                                        {item.amount}
                                    </td>
                                </tr>
                            ))}

                            {/* <tr>
                                <td scope="row">
                                    {" "}
                                    <span className="fa fa-bed mr-1" /> Hotel Leela Palace{" "}
                                </td>
                                <td>
                                    <span className="fa fa-cc-mastercard" />
                                </td>
                                <td className="text-muted">11 Jul 2020, 2:00 PM</td>
                                <td className="d-flex justify-content-end align-items-center">
                                    {" "}
                                    <span className="fa fa-long-arrow-up mr-1" />
                                    $18.9{" "}
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td scope="row">
                                    {" "}
                                    <span className="fa fa-exchange mr-1" /> Monthly Salary{" "}
                                </td>
                                <td>
                                    <span className="fa fa-cc-visa" />
                                </td>
                                <td className="text-muted">10 Jul 2020, 8:30 PM</td>
                                <td className="d-flex justify-content-end align-items-center">
                                    {" "}
                                    <span className="fa fa-long-arrow-down mr-1" />
                                    $9,765.00{" "}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    {" "}
                                    <span className="fa fa-exchange mr-1" /> Xbox Purchase{" "}
                                </td>
                                <td>
                                    <span className="fa fa-cc-mastercard" />
                                </td>
                                <td className="text-muted">12 May 2020, 4:30 PM</td>
                                <td className="d-flex justify-content-end align-items-center">
                                    {" "}
                                    <span className="fa fa-long-arrow-up mr-1" />
                                    $198.90{" "}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    {" "}
                                    <span className="fa fa-cutlery mr-1" /> Dinner Party{" "}
                                </td>
                                <td>
                                    <span className="fa fa-cc-visa" />
                                </td>
                                <td className="text-muted">11 May 2020, 5:30 PM</td>
                                <td className="d-flex justify-content-end align-items-center">
                                    {" "}
                                    <span className="fa fa-long-arrow-up mr-1" />
                                    $12.90{" "}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    {" "}
                                    <span className="fa fa-briefcase mr-1" /> Nandini Hills Ride{" "}
                                </td>
                                <td>
                                    <span className="fa fa-cc-mastercard" />
                                </td>
                                <td className="text-muted">10 May 2020, 01:30 PM</td>
                                <td className="d-flex justify-content-end align-items-center">
                                    {" "}
                                    <span className="fa fa-long-arrow-up mr-1" />
                                    $97.9{" "}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    {" "}
                                    <span className="fa fa-briefcase mr-1" /> Goa Beach Party{" "}
                                </td>
                                <td>
                                    <span className="fa fa-cc-visa" />
                                </td>
                                <td className="text-muted">09 May 2020, 01:30 PM</td>
                                <td className="d-flex justify-content-end align-items-center">
                                    {" "}
                                    <span className="fa fa-long-arrow-up mr-1" />
                                    $97.9{" "}
                                </td>
                            </tr> */}
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