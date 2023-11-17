import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    let params = useParams()
    let navigate = useNavigate()
    let url = 'https://65538f285449cfda0f2ee509.mockapi.io/jobs'
    const [img,setImg]= useState('')
    const [name,setName] = useState('')
    const [text,setTeaxt] = useState('')

const handle = ()=>{
let adData = {
   img: img,
   name: name,
   text: text
}
axios.post(url, adData).then((res)=>{
    console.log(res);
  if(res.status == 200){
    setTimeout(()=>{
      navigate('/')
    },100)
  }
})
}
const getOneData = ()=>{
  axios.get(url+'/'+params.id).then((res)=>{   
    setImg(res.data.img)
    setName(res.data.name)
    setTeaxt(res.data.text)
  })
}
useEffect(()=>{

getOneData()
},[])
  return (
    <div className="form">
        <h1>Edit {params.id}malumot</h1>
    <input value={img} type="text"placeholder='img'onClick={(e)=>setImg(e.target.value)} />
    <input value={name} type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <textarea value={text} name="" id="" cols="30" rows="10"onChange={(e)=>setTeaxt(e.target.value)}></textarea>
    <button onClick={handle}>post</button>
    </div>
    
  )
}

export default Edit