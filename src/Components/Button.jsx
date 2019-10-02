import React, { useState, useEffect } from 'react';
import './Button.css';

function Button(props) {

  const [opacity, setOpacity] = useState({opacity: 0 });

    useEffect(() => {
        let op = ( props.scrollTop + props.viewheight ) /  ( props.bodyHeight )  ;
        op = props.scrollTop < 80 ? op - 0.38 : op;
        setOpacity({opacity: op});
    }, [props.scrollTop]);

  return (
    <div className="button" style={opacity}>
        
      
    </div>
   
  );
}

export default Button;
