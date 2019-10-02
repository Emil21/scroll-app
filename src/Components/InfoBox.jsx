import React from 'react';
import Content from './Content';
import ButtonHolder from './ButtonHolder';
import Counter from './Counter';

import './InfoBox.css';

function InfoBox(props) {

  return (
    <div className="infobox">
        <ButtonHolder scrollTop={props.scrollTop} viewheight={props.viewheight} bodyHeight={props.bodyHeight}/>
        <Content para={1}/>
        <Counter scrollTop={props.scrollTop} viewheight={props.viewheight} bodyHeight={props.bodyHeight}/>
        <Content para={1}/>    
    </div>
   
  );
}

export default InfoBox;
