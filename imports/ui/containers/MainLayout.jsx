import React from 'react';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="page-box">
        <Navigation />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
