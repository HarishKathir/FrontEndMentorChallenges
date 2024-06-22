const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const port = 3002;

//middleware
app.use(cors());

//Endpoint to get all region
app.get('/api/region', (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'FEM_Starter', 'data.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ err, error: "Failed to read data" });
            return;
        }
        res.setHeader("Content-Type", "application/json");
        try {
            const countries = JSON.parse(data);
            const uniqueRegions = [...new Set(countries.map(country => country.region))];
            res.json(uniqueRegions);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            res.status(500).json({ error: 'Failed to parse data' });
        }
    })
})

//Endpoint to fetch countries of a region
app.get('/api/countries/:region', (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'FEM_Starter', 'data.json');
    const { region } = req.params;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ err, error: "Failed to read data" });
            return;
        }
        res.setHeader("Content-Type", "application/json");
        let countries = JSON.parse(data);

        if (region) {
            const filteredCountries = countries.filter(country => country.region === region);
            res.json(filteredCountries);
        }
    })
})

//Endpoint to get a country
app.get('/api/country/:countryName', (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'FEM_Starter', 'data.json');
    const { countryName } = req.params;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ err, error: "Failed to read data" });
            return;
        }
        res.setHeader("Content-Type", "application/json");

        try {
            let countries = JSON.parse(data);
            const filteredCountry = countries.find(country => country.name === countryName);

            if (filteredCountry) {
                res.json(filteredCountry);
            } else {
                res.status(404).json({ error: 'Country not found'});
            }
        } catch (error) {
            res.status(500).json({ error: "Could not find" })
        }
    })
})


app.listen(port, () => {
    console.log(`server running at ${port}`);
})