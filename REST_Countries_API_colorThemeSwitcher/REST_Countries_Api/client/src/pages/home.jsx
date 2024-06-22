import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Header from '../components/header'
import AppBar from '../components/appbar'
import Card from '../components/card'

const home = () => {

    const [countries, setCountries] = useState([]);
    const [regions,setRegions] = useState([]);
    const [country,setCountry] = useState([]);
    const [selectedCountry,setSelectedCountry] = useState("India")
    const [selectedRegion,setSelectedRegion] = useState("Antartica");


    const handleRegionChange = (value) => {
      setSelectedRegion(value);
    }

    const fetchRegions = async() => {
      const response = await axios.get("http://localhost:3002/api/region");
      const result =  response.data;
      setRegions(result);
    }

    const fetchCountries = async() =>{
        const response = await axios.get(`http://localhost:3002/api/countries/${selectedRegion}`);
        const result = response.data;
        setCountries(result);
    }

    const fetchCountry =  async() => {
      const response = await axios.get(`http://localhost:3002/api/country/${selectedCountry}`);
      const result = response.data;
    }

    useEffect(()=>{
        fetchCountries();
    },[selectedRegion]);

    useEffect(() => {
      fetchRegions();
    },[]);

    // useEffect(() => {
    //   fetchCountry();
    // },[]);

    console.log(countries)

  return (
    <div className='container-fluid'>
        <Header />
        <AppBar onValueChange={handleRegionChange} Regions={regions}/>
       
    </div>
  )
}

export default home
