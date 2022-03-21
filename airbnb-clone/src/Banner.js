import React, {useState } from 'react'
import { useHistory } from "react-router-dom"
import { Button } from '@mui/material'
import './stylesheets/Banner.css'
import Search from './Search';


function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState (false);
  return (
    <div className='banner'>
        <div className="banner__search">
            {showSearch && <Search/>}

            <Button onClick={()=> setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                {showSearch?"Hide" :"Search Dates"}
            </Button>
        </div>
        <div className="banner__info">
            <h1>Get out and strech your imagination</h1>
            <h3>Plan a different kind of gateway to uncover the hidden gems near you</h3>
            <Button onClick={()=> history.push('/search')}>Explore Nearby</Button>
        </div>
        </div>
  )
}

export default Banner