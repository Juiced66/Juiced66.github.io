import React, { useState, useEffect,useRef } from 'react';

const VISIBLE = 1
const HIDDEN = 2
const ENTERING = 3
const LEAVING = 4


const Translate = ({visible, children, duration = 500, viewportWidth = 100}) => {

    const [state,setState] = useState(visible ? VISIBLE : HIDDEN)
    const childRef = useRef(children)


    if(visible) childRef.current = children

    useEffect(() => {
        if(!visible){
            setState(LEAVING)
        }else {
            setState((s) => s === HIDDEN ? ENTERING : VISIBLE)
        }
    }, [visible]);

    useEffect(() => {
        if(state === LEAVING){
           const timer = setTimeout(() => {
                setState(HIDDEN)
            }, duration);
        return () => {
            clearTimeout(timer)
        };
        }else if(state === ENTERING){
            //need to access dom property for forcing render 
            let toto = document.body.offsetHeight
            setState(VISIBLE)
            return toto
        }
       
    }, [state,duration]);

    if(state === HIDDEN) return null

let style = {
    transitionDuration : `${duration}ms`,
    transitionProperty : 'opacity transform',
    background : '#87cefa66',
    width:`100%`,
    // marginLeft:'auto',
    transform :'translateX(0vw)'
    
}
if (state !== VISIBLE){
    style.opacity = 0
    style.transform = `translateX(${viewportWidth}%)`
}
    return (
        <div style={style}>
            {childRef.current}
        </div>
    );
}


export default Translate;
