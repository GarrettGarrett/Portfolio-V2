// components/Layout.js
import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';


function Layout({ children }) {
  return (
    <>
     <div className=" max-w-7xl mx-auto px-7 sm:px-20 lg:px-8">
        <div className="max-w-3xl mx-auto ">
          <Header />
              { children }
          <Footer />
        </div>
    </div>
    
    </>
  )
}

export default Layout;

