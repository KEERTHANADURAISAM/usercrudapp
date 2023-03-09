import { Card, CardContent } from '@mui/material';
import { maxWidth } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Base from '../Base/Base'
import './ViewUser.css'

export default function ViewUsers() {
    const params=useParams();
    const [userData,setUserData]=useState({})
  
useEffect(()=>{
loaduser()
},[])

let loaduser=async()=>{
  try{
    let user=await axios.get(`https://63ae58f93e465169166fab20.mockapi.io/user/${params.id}`)
setUserData(user.data)
  }
  catch(error){

  }
}


  return (
   <Base>
    <Card className='card-user'>
    <CardContent>
    <h2>{userData.name}</h2>
    <h3>{userData.office}</h3>
    <h3>{userData.position}</h3>
    <h3>{userData.age}</h3>
    <h3>{userData.start_data}</h3>
    <h3>{userData.salary}</h3>
    </CardContent>
    </Card>
   
   </Base>
  )
}
