import React, { useState, useLayoutEffect, useEffect } from 'react';
import './Counter.css';


function Counter(props) {

    const defaultCounterValue = [ {
        name: "Lorem", 
        count: 0,
        id: 1
    }, 
    {
        name: "Lorem", 
        count: 0,
        id: 2
    },
    {
        name: "Lorem", 
        count: 0,
        id: 3
    },
    {
        name: "Lorem", 
        count: 0,
        id: 4
    }];

    const [count, setCounter] = useState(defaultCounterValue);

    useEffect(() => {
        if( props.viewheight + props.scrollTop >=  props.bodyHeight ) {
            const counterValues = [
                {
                    name: "Lorem", 
                    count: 32, 
                    id: 1
                }, 
                {
                    name: "Lorem", 
                    count: 64, 
                    id: 2
                },
                {
                    name: "Lorem", 
                    count: 128,
                    id: 3 
                },
                {
                    name: "Lorem", 
                    count: 256,
                    id: 4 
                }
            ];
            setCounter(counterValues);
        } else {
            setCounter(defaultCounterValue);
        }
        
    }, [props.scrollTop, props.viewheight]);
    
    const renderCounter = () => {
        return count.map( (item) => {
            return (
                <div className="itemsBox" key={item.id}>
                    <div className="item">{item.name}</div> 
                    <div className="item">{item.count}</div>
                </div>
            );
        } )
    }

  return (
    <div className="counterouterDiv">
        {renderCounter()}     
    </div>
   
  );
} 
 

export default Counter;
