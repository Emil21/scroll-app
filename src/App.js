import React, { useState, useLayoutEffect } from 'react';
import ScrollBox from './Components/ScrollBox';
import InfoBox from './Components/InfoBox';
import './App.css';

function App() {

  
  const [viewheight, setHeight] = useState(0);
  const [styleApp, setStyleApp] = useState({height: '700px', backgroundColor: '#a8caff' });
  const [scrollTopValue, setScrollTop] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyWidth, setBodyWidth] = useState(0);


  useLayoutEffect(() => {
    function updateSize() {
      const newHeight =window.innerHeight
      setHeight(newHeight);
      const newStyle = {height: newHeight+'px', backgroundColor: '#a8caff'}
      setStyleApp(newStyle);
      const bHeight = document.body.clientHeight;
      setBodyHeight(bHeight);
      const bWidth = document.body.clientWidth;
      setBodyWidth(bWidth);
    }

    function handleScroll(event) {
      let scrollTop = event.target.scrollingElement.scrollTop;
      setScrollTop(scrollTop);
  
    }
    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', handleScroll);
    updateSize();

  }, []);

  return (
    <div>
       <div style={styleApp} className="boxHolder">
        <ScrollBox scrollTop={scrollTopValue} bodyWidth={bodyWidth}/>  
      </div>
      <InfoBox scrollTop={scrollTopValue} viewheight={viewheight} bodyHeight={bodyHeight}/>
    </div>
   
  );
}

export default App;
