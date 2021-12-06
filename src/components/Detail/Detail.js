import React from 'react';
//import { useState, useEffect } from 'react';
import "./Detail.css";
import { useParams } from 'react-router';
import { data } from "../data"

const Detail = () => {
    const { id } = useParams();
    //const [addMore, setAddMore] = useState(0);
    const [warehouse] = data.filter((card) => {
        return card.code === id;
    })



    return (
        <div className="grid-container">

            <div className="content">
                <h1>THE {warehouse.name} CONSULTANCY SERVICES</h1>
                <p>The {warehouse.name} offers a host of Consultancy Services to manufacturing facilities & warehouses that would like to improve their supply chain management and to companies that getting ready to enter the industry using the latest methods and technology.</p>
            </div>

            <div className="inside">
                <div className="details">
                    <h3>Details:</h3>
                    <h5 contentEditable="true">City:     Located in {warehouse.city}</h5>
                    <h5 contentEditable="true">Space Available:     {warehouse.space_available} sq.ft</h5>
                    <h5 contentEditable="true">Cluster:     {warehouse.cluster}</h5>
                    <h5 contentEditable="true">Type:      {warehouse.type}</h5>
                    <h5 contentEditable="true">Is Registered:     {warehouse.is_registered ? "True" : "False"}</h5>
                    <h5 contentEditable="true">Is live:     {warehouse.is_live ? "True" : "False"}</h5>
                </div>

                <div className="img-container">
                    <img src={warehouse.url} alt="" />
                </div>
            </div>



        </div>
    )
}

export default Detail
