import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

export default function Chart() {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 20000,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="label">{`${label} : ${payload[1].value}`}</p>

              {/* <p className="desc">Anything you want can be displayed here.</p> */}
            </div>
          );
        }
      
        return null;
      }
    return (
        <div style={{margin:"50px 0px 0px 0px", padding:"50px 0px 0px 0px"}} id='chart'>
            <div className="s-heading">
                <h1 style={{ marginTop: '60px' }}>Chart</h1>
            </div>
            <div style={{}} className="wrapper rounded">


                <div style={{ padding: "40px" }} className="d-flex justify-content-between align-items-center results">
                    <LineChart width={850} height={300} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis stroke="#8898aa" dataKey="name" />
                        <YAxis stroke="#8898aa" />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 100}}  />
                        <Legend  width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#333', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}  />
                        <Line type="monotone" dataKey="pv" stroke="#ff9900" />
                        <Line type="monotone" dataKey="uv" stroke="#ff567a" />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}
