import React from 'react'
import Chart from '../Chart/Chart'
import About from '../MainPage/About/About'
import Features from '../MainPage/Features/Features'
import Header from '../MainPage/Header/Header'
import Services from '../MainPage/Services/Services'
import Subscribe from '../MainPage/Subscribe/Subscribe'
import Transaction from '../MainPage/Transaction/Transaction'

export default function HomePage() {
    return (
        <div>
            <Header />
            <Features />
            <Services />
            <About/>
            <Transaction/>
            <Chart/>
            <Subscribe />
        </div>
    )
}
