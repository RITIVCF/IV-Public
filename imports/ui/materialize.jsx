import React from 'react';
import PropTypes from 'prop-types';
import { Random } from 'meteor/random';

export {
  LoaderCircle,
  Switch,
  Row,
  Column,
  TextArea,
  Card
};


function LoaderCircle({ style }){
	const loaderStyle = style?style:{paddingTop:"50px"};
	return (
		<div className="center-align" style={loaderStyle}>
			<div className="preloader-wrapper big active">
				<div className="spinner-layer spinner-blue-only">
					<div className="circle-clipper left">
						<div className="circle"></div>
					</div><div className="gap-patch">
						<div className="circle"></div>
					</div><div className="circle-clipper right">
						<div className="circle"></div>
					</div>
				</div>
			</div>
		</div>
	)
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
