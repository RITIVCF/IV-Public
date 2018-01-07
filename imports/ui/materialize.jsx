import React from 'react';

export function Switch({ checked, labelOff="", labelOn="", onChange }){
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
