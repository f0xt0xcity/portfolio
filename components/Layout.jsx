import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ( { children, pagina } ) => {
  return (
    <>
    <Header pagina={ pagina }/>
        { children }
    <Footer/>
    </>
  )
}

export default Layout