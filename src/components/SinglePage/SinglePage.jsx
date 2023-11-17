import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SinglePage() {
  let params = useParams() 
  let navigate = useNavigate()
  let url = 'https://65538f285449cfda0f2ee509.mockapi.io/jobs'
  const [oneData,setOneData] = useState({});
  const getOneData = ()=>{
    axios.get(url+'/'+params.id).then((res)=>{
       setOneData(res.data)
    })
}
useEffect(()=>{
  
  getOneData()
},[])
  return (
   <div className="enter">
     <div className="crad one" >
    <img src={oneData?.img} alt="picture" width={100}/>
    <button className='edit__btn' onClick={()=> navigate('/edit/'+oneData?.id)}>edit</button>
    <h1>{oneData?.name}</h1>
    <p>{oneData?.text}</p>
</div>
   </div>
  )
}

export default SinglePage