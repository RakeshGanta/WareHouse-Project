import React from 'react';
import "./Home.css";
import Listings from "../Listings/Listings"
import Footer from "../Footer/Footer"
import { data } from "../data";
import { useDispatch } from "react-redux"
import { setWareHouses } from '../../features/wareHouseSlice';

const Home = () => {
    const dispatch = useDispatch();
    dispatch(setWareHouses(data));

    return (
        <>
            <div className="hero-container">
                <h1>Welcome to our Page</h1>
                <p>What are you waiting for. Get started and find the warehouses you need</p>
                <a href="#Listing" class="btn cus btn-large btn-outline-dark" role="button" aria-pressed="true">GET STARTED</a>
            </div>
            <Listings />
            <Footer />
        </>
    )
}

export default Home
