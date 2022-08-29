import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_GET_WALLET } from '../../utils/const';
import './BuySta.css'

function BuySta() {
    let token = localStorage.getItem("token");
    const [sta, setSta] = useState('');
    const [money, setMoney] = useState('');
    const getUserSta = async () => {
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
    return (
        <div className='buySta' style={{ marginTop: '60px' }}>
            <section className="choose-package">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2" id="price">
                            <h5 className="special-heading text-center">Choose</h5>
                            <h1 className="text-center">Package</h1>
                            <p className="text-center big">
                                You have <span style={{ color: 'gold', fontWeight: '600', fontSize: '1.5em' }}>{sta}</span> STA, and <span style={{ color: 'gold', fontWeight: '600', fontSize: '1.5em' }}>{money}</span> money
                            </p>
                        </div>
                    </div>
                    <div className="divider-45 d-none d-lg-block" />
                    <div className="row c-gutter-60">
                        <div className="col-lg-4 col-12">
                            <div className="pricing-plan hero-bg rounded">
                                <div className="plan-name text-uppercase bg-maincolor">
                                    <h3>10 STA</h3>
                                </div>
                                <div className="plan-desc">
                                    <div className="plan-content">
                                        <h4 className="color-main">350</h4>
                                        <p className="small-text text-left">
                                            <i className="color-main fa fa-angle-down" aria-hidden="true" />
                                            mb/s
                                        </p>
                                        <h4 className="color-main2">250</h4>
                                        <p className="small-text text-left">
                                            <i className="color-main2 fa fa-angle-up" aria-hidden="true" />
                                            mb/s
                                        </p>
                                    </div>
                                    <div className="price-icon">
                                        <img src="https://i.ibb.co/Q8R9mDp/price-icon01.png" alt="" />
                                    </div>
                                </div>
                                <div className="plan-features">
                                    <ul className="list-bordered">
                                        <li>VOIP Service</li>
                                        <li>Online IPTV HD</li>
                                        <li>Giga Port</li>
                                        <li>24/7 Support</li>
                                        <li>Free TV Set Installation</li>
                                    </ul>
                                </div>
                                <div className="price-wrap d-flex">
                                    <span className="plan-sign small-text"></span>
                                    <span className="plan-price color-main2">10.000</span>
                                    <span className="plan-decimals small-text">/Money</span>
                                </div>
                                <div className="plan-button">
                                    <a href="#" className="btn btn-maincolor">
                                        <span>Purchase</span>
                                    </a>
                                </div>
                            </div>
                            <div className="divider-45 d-block d-lg-none" />
                        </div>


                        <div className="col-lg-4 col-12">
                            <div className="pricing-plan hero-bg rounded">
                                <div className="plan-name text-uppercase bg-maincolor2">
                                    <h3>100 STA</h3>
                                </div>
                                <div className="plan-desc">
                                    <div className="plan-content">
                                        <h4 className="color-main3">200</h4>
                                        <p className="small-text">
                                            <i
                                                className="color-main3 fa fa-angle-down"
                                                aria-hidden="true"
                                            />
                                            mb/s
                                        </p>
                                        <h4 className="color-main4">150</h4>
                                        <p className="small-text">
                                            <i className="color-main4 fa fa-angle-up" aria-hidden="true" />
                                            mb/s
                                        </p>
                                    </div>
                                    <div className="price-icon">
                                        <img src="https://i.ibb.co/TLxQR5H/price-icon02.png" alt="" />
                                    </div>
                                </div>
                                <div className="plan-features">
                                    <ul className="list-bordered">
                                        <li>VOIP Service</li>
                                        <li>Online IPTV</li>
                                        <li>Giga Port</li>
                                        <li>24/7 Support</li>
                                        <li>Free TV Set Installation</li>
                                    </ul>
                                </div>
                                <div className="price-wrap d-flex">
                                    <span className="plan-sign small-text"></span>
                                    <span className="plan-price color-main3">100.000</span>
                                    <span className="plan-decimals small-text">/Money</span>
                                </div>
                                <div className="plan-button">
                                    <a href="#" className="btn btn-maincolor2">
                                        <span >Purchase</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="divider-20 d-block d-md-none" />
                        <div className="col-lg-4 col-12">
                            <div className="pricing-plan hero-bg rounded">
                                <div className="plan-name text-uppercase bg-maincolor3">
                                    <h3>1000 STA</h3>
                                </div>
                                <div className="plan-desc">
                                    <div className="plan-content">
                                        <h4 className="color-main5">100</h4>
                                        <p className="small-text">
                                            <i
                                                className="color-main5 fa fa-angle-down"
                                                aria-hidden="true"
                                            />
                                            mb/s
                                        </p>
                                        <h4 className="color-main6">50</h4>
                                        <p className="small-text">
                                            <i className="color-main6 fa fa-angle-up" aria-hidden="true" />
                                            mb/s
                                        </p>
                                    </div>
                                    <div className="price-icon">
                                        <img src="https://i.ibb.co/v4dV3Fj/price-icon03.png" alt="" />
                                    </div>
                                </div>
                                <div className="plan-features">
                                    <ul className="list-bordered">
                                        <li>VOIP Service</li>
                                        <li>Online IPTV</li>
                                        <li>Giga Port</li>
                                        <li>24/7 Support</li>
                                        <li>Free TV Set Installation</li>
                                    </ul>
                                </div>
                                <div className="price-wrap d-flex">
                                    <span className="plan-sign small-text"></span>
                                    <span className="plan-price color-main5">1.000.000</span>
                                    <span className="plan-decimals small-text">/Money</span>
                                </div>
                                <div className="plan-button">
                                    <a href="#" className="btn btn-maincolor3">
                                        <span>Purchase</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BuySta