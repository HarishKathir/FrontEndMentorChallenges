import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/card'

const home = () => {
    const [datas,setdatas] = useState([]);

    const fetchData = async() =>{
      const response = await axios.get('http://localhost:3002/data');
      const data = response.data;
      setdatas(data);
    }

    useEffect(() =>{
      fetchData();
    },[]);

  return (
    <div>
      {datas.map((data,index) => <Card data={data} />)}
      
    </div>
  )
}

export default home
