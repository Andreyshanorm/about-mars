import React from 'react'
import * as styles from './Header.module.css'
import { NavLink, Link, useMatch } from 'react-router-dom'
import CustomLink from './CustomLink/CustomLink'
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


export default function Header() {

  const main = useMatch('/')
  const mars = useMatch('/mars')
  
  return (

    <div className={styles.navigation}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <HomeIcon sx={ main ? {  color: 'orange' } : {}}/>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li className={styles.nav_list_item}>
          <TravelExploreIcon sx={ mars ? {  color: 'orange' } : {}}/>
          <CustomLink to="/mars">Mars Photos</CustomLink>
        </li>
      </ul>
    </div>

  )
}
