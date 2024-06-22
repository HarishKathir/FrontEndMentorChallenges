import React, { useState } from 'react'
import './appbar.css'
import SearchIcon from '../assets/searchicon.svg'

const appbar = ({onValueChange,Regions}) => {

    const [searchQuery,setSearchQuery] = useState("");
    const [selectedOption,setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        onValueChange(value)
    }

  return (
    <div className="appbarContainer">
        <div className="appbarContents">
            <div className="searchBar">
                <input type="text" />
            </div>
            <div className="optionSelector">
                <select name="countries" id="" onChange={handleOptionChange}>
                <option value="">Select Region</option>
                    {Regions.map((option,idx) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    </div>
  )
}

export default appbar
