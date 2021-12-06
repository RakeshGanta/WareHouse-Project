import React from 'react'
import Filters from '../filters/filters';
import "./Listings.css";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { selectWarehouses } from '../../features/wareHouseSlice';
import { setWareHouses } from '../../features/wareHouseSlice';
import { setFilterData, selectFilters } from '../../features/filterSlice';

const Listings = () => {
    const main = useSelector(selectWarehouses);
    const filters = useSelector(selectFilters);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        const storage = main.filter((data) => {
            return data.name === filters.search;
        })
        console.log(storage)
        dispatch(setWareHouses(storage))
        //dispatch(setFilterData({ ...selectFilters, search: "" }))
        e.preventDefault();
    }

    return (
        <div className="Container" id="Listing">
            <h1>Check out our Warehouses</h1>
            <form onSubmit={e => handleSubmit(e)} style={{ fontSize: "1.5rem" }}>
                <label> Search by Warehouse name:</label>
                <input type="text" Placeholder="Ex.Warehouse-165" value={filters.search} onChange={e => dispatch(setFilterData({ search: e.target.value, city: filters.city, cluster: filters.cluster, space: filters.space }))} />
            </form>
            <Filters />
            <div className="big" >
                {(main.map((card) => {
                    return (
                        <Link to={`/detail/${card.code}`} key={card.id} className="link">
                            <div className="custom-made">
                                <div className="title">
                                    <h5 > {card.name} </h5>
                                </div>
                                <div className="body">
                                    <img src={card.url} alt="Card  cap" />
                                    <div className="meta">
                                        <h4>Location: {card.city} </h4>
                                        <h5>Space Availablle :{card.space_available}</h5>
                                        <h5>Type : {card.type}</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                }))}
            </div>
        </div>
    )
}

export default Listings
