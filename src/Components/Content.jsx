import React from 'react';
import data from './../Data/data';
import './Content.css';

function Content(props) {


  return (
    <div className="contentouterDiv">
        {props.para === 1 ? data.para1 : data.para2}
      
    </div>
   
  );
}

export default Content;
