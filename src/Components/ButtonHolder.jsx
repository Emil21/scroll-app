import React from 'react';
import Button from './Button';
import './ButtonHolder.css';

function ButtonHolder(props) {

  return (
    <div className="outerDiv">
        <Button scrollTop={props.scrollTop} viewheight={props.viewheight} bodyHeight={props.bodyHeight}/>
        <Button scrollTop={props.scrollTop} viewheight={props.viewheight} bodyHeight={props.bodyHeight}/>
        <Button scrollTop={props.scrollTop} viewheight={props.viewheight} bodyHeight={props.bodyHeight}/>
        <Button scrollTop={props.scrollTop} viewheight={props.viewheight} bodyHeight={props.bodyHeight}/>
      
    </div>
   
  );
}

export default ButtonHolder;
