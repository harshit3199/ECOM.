import React from 'react'
import Announcement from '../components/Announcement'
import Catergories from '../components/Catergories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catergories/>
        </div>
    )
}

export default Home
