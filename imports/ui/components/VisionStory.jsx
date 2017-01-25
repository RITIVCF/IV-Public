import React from 'react';
// import { Link } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';


export default class VisionStory extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  };
  handleScroll(e) {
    var scrollPos = e.srcElement.body.scrollTop;
    var slider = document.getElementById('slider');
    var Transformed = document.getElementById('Transformed');
    var Renewed = document.getElementById('Renewed');
    var Developed = document.getElementById('Developed');
    var TransformedBox = document.getElementById('TransformedBox');
    var RenewedBox = document.getElementById('RenewedBox');
    var DevelopedBox = document.getElementById('DevelopedBox');
    var AspectsHeight = document.getElementById('Aspects').offsetHeight;
    var TransformedTop = Transformed.offsetTop;
    var TransformedHeight = Transformed.offsetHeight;
    var RenewedTop = Renewed.offsetTop;
    var RenewedHeight = Renewed.offsetHeight;
    var DevelopedTop = Developed.offsetTop;
    var DevelopedHeight = Developed.offsetHeight;
    switch (true) {
      case (scrollPos < TransformedTop + TransformedHeight - AspectsHeight):
        slider.className = "Transformed col s12 m4 l4";
        break;
      case (scrollPos < RenewedTop + RenewedHeight - AspectsHeight):
        slider.className = "Renewed col s12 m4 l4";
        break;
      case (scrollPos < DevelopedTop + DevelopedHeight - AspectsHeight):
        slider.className = "Developed col s12 m4 l4";
        break;
      default:
        break;
    }
  };
  render() {
    var stickyStyles = {
      width: "100%",
      left: "50%",
      transform: "translateX(-50%)"
    };
    return (
      <StickyContainer className="VisionStory">
        <Sticky id="Aspects" className="row" stickyStyle={stickyStyles}>
          <div id="TransformedBox" className="col s12 m4 l4">
            <i className="fa fa-users"></i>
            <h3>Students and Faculty Transformed</h3>
          </div>
          <div id="RenewedBox" className="col s12 m4 l4">
            <i className="fa fa-building"></i>
            <h3>Campuses Renewed</h3>
          </div>
          <div id="DevelopedBox" className="col s12 m4 l4">
            <i className="fa fa-globe"></i>
            <h3>World Changers Developed</h3>
          </div>
          <div id="slider" className="col s12 m4 l4"></div>
        </Sticky>
        <div id="Transformed" className="details">
          More details about lives being transformed<br />
          A testimony from someone in intervarsity would be awesome!
        </div>
        <div id="Renewed" className="details">
          More details about the campus being renewed<br />
          Perhaps and article about RIT in the news?
        </div>
        <div id="Developed" className="details">
          More details about the campus being renewed<br />
          What goes on beyond the bricks?
        </div>
      </StickyContainer>
    );
  }
}
