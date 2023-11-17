import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
    let navigate = useNavigate();
    let url = 'https://65538f285449cfda0f2ee509.mockapi.io/jobs'
    const [data,setData] = useState();
    const getData = ()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
        })
    }
   
    
    useEffect(()=>{
        getData()
    },[])
    console.log(data);
  return (
    <div className="container wrapper">
    {data?.map((item,index)=>{
        return(
            <div className="crad" key={item?.id}
            onClick={()=> navigate('/news/'+item?.id)}>
            <img className='one__img' src={item.img} alt="picture" height={200}/>
            <h1>{item.name}</h1>
            <p className='one__text'>{item.text}</p>
        </div>
        )
    })}
  
</div>
  )
}

export default Home