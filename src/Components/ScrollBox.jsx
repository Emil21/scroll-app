import React, { useState, useEffect } from 'react';
import './ScrollBox.css';

function ScrollBox(props) {

  const [styleBox, setStyleBox] = useState({left: 0 });

  useEffect(() => {
    const divi = props.bodyWidth / 100;
    // const ifEnd = props.bodyWidth <= (styleBox.left + 105) ? true : false;
    let newStyle = {};
    if( props.bodyWidth <= (styleBox.left +101) ) {
      newStyle = {
        
        display: 'none'
      }
    } else {
      newStyle = {left: props.scrollTop * divi < props.bodyWidth ? props.scrollTop * divi : props.bodyWidth - 106};
    }
    setStyleBox( newStyle)
}, [props.scrollTop]);
  

  return (
    <div className="scrollbox" style={styleBox}>
      
    </div>
   
  );
}

export default ScrollBox;
