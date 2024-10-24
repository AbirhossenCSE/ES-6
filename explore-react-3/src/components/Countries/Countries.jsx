import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = country =>{
        console.log('add to list');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)   
    }
    const handleVisitedFlag = flag =>{
        console.log('Visited flag');
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
        
    }

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            {/* visited flag */}
            <div>
                <h5>Viseted Countries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3} >{country.name.common} </li>)
                    }
                </ul>
            </div>
            {/* Display Flag */}
            <div className="flag-container">
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* Display Countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag} 
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
