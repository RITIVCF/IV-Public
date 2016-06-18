import React, {Component} from 'react';

export default class LocalChurchesSingle extends Component {
    render() {
        return (
            <li>
              <div className="Name">
              <a href={"http://"+ this.props.church.url} target="_blank">
                {this.props.church.name}
                </a>
              </div>
              {/*
              <div className="times">
                Sunday
                {" "+ this.props.church.time1}
              </div>
              Rides Contact:
              <div className="contact">
                {this.props.church.contact1.name}
                {this.props.church.contact1.phone}
              </div>*/}
            </li>
        )
    }

}
