import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Post() {
  let navigate = useNavigate()
    let url = 'https://65538f285449cfda0f2ee509.mockapi.io/jobs'
    const [img,setImg]= useState('')
    const [name,setName] = useState('')
    const [text,setTeaxt] = useState('')

const handle = ()=>{
let adData = {
  img:img,
   name: name,
   text: text
}
axios.post(url, adData).then((res)=>{
    console.log(res);
  if(res.status == 201){
    setTimeout(()=>{
      navigate('/')
    },100)
  }
})

}
  return (

<div className="form">
<input type="text"placeholder='img'onChange={(e)=>setImg(e.target.value)} />
<input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
<textarea name="" id="" cols="30" rows="10"onChange={(e)=>setTeaxt(e.target.value)}></textarea>
<button onClick={handle}>Post</button>
</div>

  )
}

export default Post