import React from 'react'
import './stylesheets/Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <Link to ='/'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" className="header__icon" />
      </Link>
       
    <div className="header__center">
        <input type="text" />
        <SearchIcon/>
        </div>
        <div className="header__right">
          <p>Become a Host</p>
          <LanguageIcon/>
          <ExpandMoreIcon/>
          <Avatar/>
        </div>
    
    </div>
  )
}

export default Header