import React from 'react'
import "./filters.css";
import { useSelector, useDispatch } from 'react-redux';
import { data } from "../data";
import { setFilterData, selectFilters } from '../../features/filterSlice';
import { setWareHouses } from '../../features/wareHouseSlice';



const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const clusters = [...new Set(data.map((card) => card.cluster))];
    const cities = [...new Set(data.map((card) => card.city))];

    const handleSpace = (e) => {
        const req = data.filter((card) => {
            return parseInt(card.space_available) <= parseInt(filters.space);
        })
        dispatch(setWareHouses(req))
        e.preventDefault();
    }

    const handleCity = (e) => {
        const req = data.filter((card) => {
            if (filters.city === "None") {
                return data;
            }
            return card.city === filters.city;
        })
        dispatch(setWareHouses(req))
        e.preventDefault();
    }

    const handleCluster = (e) => {
        const req = data.filter((card) => {
            if (filters.cluster === "None") {
                return data;
            }
            return card.cluster === filters.cluster;
        })
        dispatch(setWareHouses(req))
        e.preventDefault();
    }


    return (
        <div className="control">

            <form className="handle" onSubmit={e => { handleSpace(e) }} >
                <label for="cities" >Space available limit(sq.ft): </label>
                <input className="handle" type="text" onChange={e => dispatch(setFilterData({ city: filters.city, cluster: filters.cluster, space: e.target.value }))} />
            </form>


            <form className="handle" onSubmit={e => { handleCity(e) }}>
                <label >Choose a city: </label>
                <select id="cars" name="city" onChange={e => dispatch(setFilterData({ city: e.target.value, cluster: filters.cluster, space: filters.space }))}>
                    <option className="handle" value="None">None</option>
                    {cities.map((card) => {
                        return (<option className="handle" value={card}>{card}</option>)
                    })}
                </select>
                <input className="handle" type="submit" value="Submit" />
            </form>



            <form className="handle" onSubmit={e => { handleCluster(e) }}>
                <label for="cities">Choose a cluster: </label>
                <select id="cars" name="cluster" onChange={e => dispatch(setFilterData({ cluster: e.target.value, city: filters.city, space: filters.space }))}>
                    <option value="None">None</option>
                    {clusters.map((card) => {
                        return (<option className="handle" value={card}>{card}</option>)
                    })}
                </select>
                <input type="submit" value="Submit" />
            </form>


        </div>
    )
}

export default Filters
