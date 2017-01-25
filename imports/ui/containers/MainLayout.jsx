import React from 'react';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';


export var MainLayout = ({content}) => (
  <div className="page-box">
    <Navigation />
    <main>{content}</main>
    <Footer />
  </div>
)
