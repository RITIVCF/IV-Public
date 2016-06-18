import React, {Component} from 'react';

export default class BioSingle extends Component {
    render() {
        return (
          <div>
            <div style={{clear: "both"}}></div>
            <section>
              <h2 style={{marginTop: .5 +'em',marginBottom: .1+'em'}}><strong>{this.props.bio.name} - {this.props.bio.position}</strong></h2>
            </section>
            <section>
              {/*<img src="" className="bio-image" alt="" />*/}
              <p>
                {this.props.bio.bio}
              </p>
            </section>
          </div>
        )
    }
}
