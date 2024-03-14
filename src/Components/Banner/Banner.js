import React,{useEffect} from 'react'
import {API_KEY} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  useEffect(()=>{
    axios.get('trending/all/week?api_key=${API_KEY}&language=en-US')
  },[])
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_btn'>
            <button className='btn'>Play</button>
            <button className='btn'>My list</button>
        </div>
        <h1 className='description'>loake a type specimen book.f the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </h1>
      </div>
       <div className="fade"></div>

    </div>
  )
}

export default Banner
