import React from 'react';
import { Link } from 'react-router';

export default class Banner extends React.Component {
  render() {
    var parallaxStyles  = {
      display: "block",
      transform: "translate3d(-50%, 360px, 0px)"
    };
    return (
      <section className="banner parallax-container">
        <div className="inner">
        <div className="borders">
        <img src="/images/InterVarsity-RIT-logo.png" />
        </div>
        <p>Intervarsity Christian Fellowship<br />
        at Rochester Institute of Technology<br /></p>
        </div>
        <div className="parallax">
          <img src="/images/clothespin_1.jpg" style={parallaxStyles} />
        </div>
      </section>
    );
  }
}
