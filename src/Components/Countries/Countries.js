import React from 'react';
import { useState, useEffect } from 'react';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then (data => setCountries(data))
    }, []);
  
    return (
    
      <div>
  
        <h3> Available Countries for visit :{countries.length}</h3>
      
      <div className="loadCountries">
      {
        countries.map((country, index) => <DisplayCountries name= {country.name.common} plage={country.flags.png} key={index}></DisplayCountries>)
      }
      
      </div>
      </div>
    
    )
};
  
  function DisplayCountries(props){
    // console.log(props)
    return(
      <div className="displayCountries">
        <h3>{props.name}</h3>
        <img src={props.plage} alt=""/>
      </div>
    )
  }

  export default Countries;