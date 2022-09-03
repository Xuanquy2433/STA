import React, { useEffect, useState } from 'react'
import './market.css'
import axios from 'axios';
import { API_ADD_MARKET, API_GET_BY_USER_MARKET, API_GET_TYPE_MARKET, API_PUT_BY_USER_MARKET } from '../../utils/const';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




function Market() {

    let token = localStorage.getItem("token");

    const [marketSell, setMarketSell] = useState([]);
    const [marketBuy, setMarketBuy] = useState([]);
    const [marketByUser, setMarketByUser] = useState([]);
    const [marketByUserComplete, setMarketByUserComplete] = useState([]);
    const [staGet, setStaGet] = useState('')
    const [priceGet, setPriceGet] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [checkBox, setCheckBox] = useState('sell');
    const [valueState, setValueState] = useState("")

    const handleChange = event => {
        setIsSubscribed(current => !current);
        if (isSubscribed) {
            setCheckBox('sell')
            setData({ ...data, "type": "sell" })
        } else {
            setCheckBox('buy')
            setData({ ...data, "type": "buy" })
        }
    };



    const [data, setData] = useState({
        "price": '',
        "sta": '',
        "status": "placing",
        "type": null
    })


    if (data.type === null) {
        console.log("Null id ");
        // check nếu ko chọn sẽ mặc định lấy gia trị là sell
        setData({ ...data, type: 'sell' })
    }


    console.log("check ", checkBox);
    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const getMarketByUser = async (e) => {
        const response = await axios.get(API_GET_BY_USER_MARKET + "?status=placing&token=" + token)
        setMarketByUser(response.data)
    }

    const getMarketByUserCompleted = async (e) => {
        const response = await axios.get(API_GET_BY_USER_MARKET + "?status=completed&token=" + token)
        setMarketByUserComplete(response.data)
    }

    const getMarketByTypeSell = async (e) => {
        const response = await axios.get(API_GET_TYPE_MARKET + "?token=" + token + "&type=sell")
        setMarketSell(response.data)
    }

    const getMarketByTypeBuy = async (e) => {
        const response = await axios.get(API_GET_TYPE_MARKET + "?token=" + token + "&type=buy")
        setMarketBuy(response.data)
    }

    const addMarket = async () => {
        try {
            const response = await axios.post(API_ADD_MARKET + token, data)
            toast.success("Success", {
                autoClose: 2000
            })
            getMarketByUser()
            setTimeout(() => {
                window.location.reload()
            }, 2000);

        } catch (error) {
            toast.error("Error API", {
                autoClose: 2000
            })
        }

    }

    const updateMarket = async (id) => {
        try {
            const response = await axios.put(API_PUT_BY_USER_MARKET + "?token=" + token, {
                "id": id,
                "status": "cancelled"
            })
            toast.success("Success", {
                autoClose: 2000
            })
            getMarketByUser()

        } catch (error) {
            toast.error("Error API", {
                autoClose: 2000
            })
        }

    }

    const handler = (event) => {
        const value = event.target.value
        console.log(value);
        setData({ ...data, type: (value) })
        setValueState(value)
        console.log("valueeeeeeeeeeeeeeeeee", value);
    }



    const getValue = (sta, price) => {
        setStaGet(sta)
        setPriceGet(price)
        // setData({ ...data, price: price })

    }

    console.log("data ", data);
    console.log("market by type sell ", marketSell);
    console.log("market by type buy ", marketBuy);
    useEffect(() => {
        getMarketByTypeSell()
        getMarketByTypeBuy()
        getMarketByUser()
        getMarketByUserCompleted()
    }, []);
    return (
        <div className='market' style={{ marginTop: '60px', with: '100%' }}>
            <div className='block-top'>
                <h1 style={{ color: 'gold' }}> Sell</h1>

                <div style={{ backgroundColor: "#222222", padding: "0", borderRadius: "5px" }} className="col-xl-8 order-xl-1">
                    <div style={{ height: "500px", borderRadius: "5px" }} id="style-1" className="table-wrapper-scroll-y my-custom-scrollbar" >
                        <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                            <thead>
                                <tr>
                                    {/* <th scope="col">UID</th> */}
                                    <th style={{ color: "white", textAlign: "center" }} scope="col">STA Available</th>
                                    <th style={{ color: "white", textAlign: "center" }} scope="col">Price</th>
                                    {/* <th style={{ textAlign: "center" }} scope="col"> Date</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {marketSell && marketSell.map((item, index) => (
                                    <tr onClick={() => getValue(item.staAvailable, item.price)} key={index}>
                                        <td style={{ color: "white", textAlign: "center" }} scope="row">{item.staAvailable}</td>
                                        <td style={{ color: "white", textAlign: "center" }} scope="row">{item.price}</td>
                                        {/* <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='block-top'>
                <h1>Buy</h1>
                <div style={{ backgroundColor: "#222222", padding: "0", borderRadius: "5px" }} className="col-xl-8 order-xl-1">
                    <div style={{ height: "500px", borderRadius: "5px" }} id="style-1" className="table-wrapper-scroll-y my-custom-scrollbar" >
                        <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                            <thead>
                                <tr>
                                    {/* <th scope="col">UID</th> */}
                                    <th style={{ color: "white", textAlign: "center" }} scope="col">STA Available</th>
                                    <th style={{ color: "white", textAlign: "center" }} scope="col">Price</th>
                                    {/* <th style={{ textAlign: "center" }} scope="col"> Date</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {marketBuy && marketBuy.map((item, index) => (
                                    <tr onClick={() => getValue(item.staAvailable, item.price)} key={index}>
                                        <td style={{ color: "white", textAlign: "center" }} scope="row">{item.staAvailable}</td>
                                        <td style={{ color: "white", textAlign: "center" }} scope="row">{item.price}</td>
                                        {/* <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div style={{ height: '500px' }} className='block-top'>
                <h1 style={{ marginTop: '70px' }} className='buy'>ADD</h1>
                <div style={{ border: '1px solid #ddd', padding: '10px', height: '500px' }}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Price</label>
                            <input
                                type="number"
                                min={"1"}
                                className="form-control"
                                id="inputEmail4"
                                name='price'
                                onChange={onChangeText}
                              
                                placeholder="Price"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">STA</label>
                            <input
                                type="number"
                                min={"1"}
                                className="form-control"
                                id="inputPassword4"
                                placeholder="STA"
                                name='sta'
                                onChange={onChangeText}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Type</label>
                            <select onChange={handler} name={valueState} class="form-control" id="exampleFormControlSelect1">
                                <option value={'sell'}  >
                                    Sell
                                </option>
                                <option value={'buy'}  >
                                    Buy
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            {/* <label for="inputState">ok</label> */}
                            <button onClick={addMarket} style={{ marginTop: '30px', marginLeft: '133px' }} type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>


                    {/* <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            onChange={handleChange}
                            value="sell"
                            className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="customRadioInline1">
                            Sell
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            onChange={handleChange}
                            value="buy"
                            className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="customRadioInline2">
                            Buy
                        </label>
                    </div> */}


                </div>

            </div>


            <div style={{ height: '630px' }} className='block-top'>
                <h1 style={{ marginTop: '70px' }} className='buy'>Logs</h1>
                <div style={{ backgroundColor: "#222222", padding: "0", borderRadius: "5px" }} className="col-xl-8 order-xl-1">
                    <div style={{ height: "500px", borderRadius: "5px" }} id="style-1" className="table-wrapper-scroll-y my-custom-scrollbar" >


                        <Tabs>
                            <TabList>
                                <Tab>Placing</Tab>
                                <Tab>Completed</Tab>
                            </TabList>

                            <TabPanel>
                                <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                                    <thead>
                                        <tr>
                                            {/* <th scope="col">UID</th> */}
                                            <th style={{ color: "white", textAlign: "center" }} scope="col">STA Available</th>
                                            <th style={{ color: "white", textAlign: "center" }} scope="col">Price</th>
                                            <th style={{ color: "white", textAlign: "center" }} scope="col"> Type</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {marketByUser.length > 0 ? marketByUser.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.staAvailable}</td>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.price}</td>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.type}</td>

                                                {/* <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></td> */}
                                                <td style={{ textAlign: "center" }} className="text-muted">
                                                    <button onClick={() => updateMarket(item.id)} style={{ backgroundColor: "#78909C", color: "#FFFFFF", padding: "4px 8px", margin: "0" }} type="button" className="btn">Cancel</button>
                                                </td>
                                            </tr>
                                        )) : <tbody><h2 style={{ textAlign: 'center', marginLeft: '300px' }}>Nothing</h2></tbody>}
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                                <table class="table table-bordered table-striped mb-0" className="table table-darkN table-borderless">
                                    <thead>
                                        <tr>
                                            {/* <th scope="col">UID</th> */}
                                            <th style={{ color: "white", textAlign: "center" }} scope="col">STA</th>
                                            <th style={{ color: "white", textAlign: "center" }} scope="col">Price</th>
                                            <th style={{ color: "white", textAlign: "center" }} scope="col"> Type</th>
                                            <th style={{ color: "white", textAlign: "center" }} scope="col"> Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {marketByUserComplete.length > 0 ? marketByUserComplete.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.sta}</td>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.price}</td>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.type}</td>
                                                <td style={{ color: "white", textAlign: "center" }} scope="row">{item.status}</td>

                                                {/* <td style={{ textAlign: "center", color: "#8898aa" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></td> */}

                                            </tr>
                                        )) : <tbody><h2 style={{ textAlign: 'center', marginLeft: '300px' }}>Nothing</h2></tbody>}
                                    </tbody>
                                </table>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Market