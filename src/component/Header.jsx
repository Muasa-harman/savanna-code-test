import React from 'react'
import './header.scss'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { DarkModeContext } from '../context/darkModeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='header'>
      <div className='header__left'>
      <Link to="/" style={{ textDecoration: "none",color:"gray" }}>
      <img className='logo' src='https://i0.wp.com/savannahdatasolutionslimited.com/wp-content/uploads/2022/02/latest-logo-RESIZED-e1646299158419.png?fit=760%2C859&ssl=1' alt='logo'/>
      </Link>
      </div>
      <div className='header__right'>
      <div className="items">
          <div className="item">
          <h4 className="">John solutions</h4>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="items">
          </div>
          <div className="item">
           
          </div>
            <h3 className="user">John</h3>
            <div className="item">
              <NotificationsNoneIcon className='iccon'/>
              <h6 className='sum'>59</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
