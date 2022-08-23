import React from 'react'
import Features from '../MainPage/Features/Features'
import Header from '../MainPage/Header/Header'
import Services from '../MainPage/Services/Services'
import Subscribe from '../MainPage/Subscribe/Subscribe'

export default function HomePage() {
    return (
        <div>
            <Header />
            <Features />
            <Services />
            <Subscribe />
        </div>
    )
}
