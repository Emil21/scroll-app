import React, { useState, useEffect } from 'react';
import './ScrollBox.css';

function ScrollBox(props) {

  const [styleBox, setStyleBox] = useState({left: 0 });

  useEffect(() => {
    const divi = props.bodyWidth / 100;
    setStyleBox( {left: props.scrollTop * divi})
}, [props.scrollTop]);
  

  return (
    <div className="scrollbox" style={styleBox}>
      
    </div>
   
  );
}

export default ScrollBox;
