import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import * as styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
