import React from 'react';
import PropTypes from 'prop-types';
import { Random } from 'meteor/random';

export {
  Switch,
  Row,
  Column,
  TextArea,
  Card
};

/*  Switch  */
function Switch({ checked, labelOff="", labelOn="", onChange }){
 return (
   <div className="switch">
     <label>
       {labelOff}
       <input type="checkbox" checked={checked} onClick={onChange} />
       <span className="lever"></span>
       {labelOn}
     </label>
   </div>
 );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  labelOff: PropTypes.string,
  labelOn: PropTypes.string
};
/*  ./Switch  */

/*  Row  */
function Row({ style={}, children }) {
  return (<div className="row" style={{...style}}>{children}</div>)
}

Row.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
/*  ./Row  */

/*  Column  */
function Column({ size="s12", className="", style={}, children }) {
  return (
    <div className={"col " + size + className} style={{...style}}>
      {children}
    </div>
  );
}

Column.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
/*  ./Column  */

/*  TextArea  */
function TextArea({ value, onChange, name, label, placeholder }) {
  const id = "textarea_"+name+"_"+Random.secret(3);
  return (
    <div className="input-field col s12">
      <textarea
        id={id}
        className="materialize-textarea"
        name={name}
        onChange={(event)=>{onChange(event.target.value)}}
        placeholder={placeholder}
      ></textarea>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
};
/*  ./TextArea  */

/*  ./Card  */
function Card ({ children }){
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
/*  ./Card  */
