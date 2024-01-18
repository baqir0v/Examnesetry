import React from 'react'
import "./index.scss"
import Navbar from '../../layout/Navbar'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Menu/>
        </div>
    )
}

export default HomePage