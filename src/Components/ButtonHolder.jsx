import React, { useState, useLayoutEffect } from 'react';
import Button from './Button';
import './ButtonHolder.css';

function ButtonHolder(props) {

  const renderButtons = () => {

  }

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
