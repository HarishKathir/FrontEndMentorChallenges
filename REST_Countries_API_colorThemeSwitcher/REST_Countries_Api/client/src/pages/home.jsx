import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import AppBar from "../components/appbar";
import Card from "../components/card";

const home = () => {
  //state to manage the list of regions
  const [regions, setRegions] = useState([]);

  //state to manage the selection of a region
  const [selectedRegion, setSelectedRegion] = useState("Asia");

  //state to manage countries from the selected region
  const [countries, setCountries] = useState([]);
  
  //state to manage a single seleted country
  const [country, setCountry] = useState([]);

  //state to manage the selection of a country
  const [selectedCountry, setSelectedCountry] = useState("");


  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const fetchRegions = async () => {
    const response = await axios.get("http://localhost:3002/api/region");
    const result = response.data;
    setRegions(result); //returns the list of regions
  };

  const fetchCountries = async () => {
    const response = await axios.get(
      `http://localhost:3002/api/countries/${selectedRegion}`
    );
    const result = response.data;
    setCountries(result); //returns the list of countries on the selected region
  };

  const fetchCountry = async () => {
    const response = await axios.get(
      `http://localhost:3002/api/country/${selectedCountry}`
    );
    const result = response.data;
    setCountry(result); //returns the country selected
  };

  useEffect(() => {
    fetchCountries();
  }, [selectedRegion]);

  useEffect(() => {
    fetchRegions();
  }, []);

  // useEffect(() => {
  //   fetchCountry();
  // },[]);

  return (
    <div className="container-fluid">
      <Header />
      <AppBar onValueChange={handleRegionChange} Regions={regions} />
      {Object.entries(countries).map(([key,value]) => (
        <Card country={value} />
      ))}
    </div>
  );
};

export default home;
