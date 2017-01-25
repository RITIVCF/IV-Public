import React, {Component} from 'react';

export default class EventModal extends Component {

    componentDidMount(){
      $('.modal').modal();
    }

    open(){
      $("#"+this.props.ev._id).appendTo("body").modal("open");
    }

    render() {
      return (
        <div id={this.props.ev._id} className="modal">
          <div className="modal-content">
            <h2>{this.props.ev.name}</h2>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      )
    }
}
