import React from 'react'

const detailPage = ({country}) => {

    const [flags , name , nativename , population , region , subregion , capital , toplevelDomain, currencies , languages , borderCountries] = country;

  return (
    <div className='detailPage_container'>
      <div className="backButton">
        <button>Back</button>
      </div>
      <div className="detailContent">
        <img src={flags.svg} />
        <p>{name}</p>
        <p>{nativename}</p>
      </div>
    </div>
  )
}

export default detailPage
