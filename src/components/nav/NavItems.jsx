import React from 'react';

const NavItems = (props) => {
    return (
        <button onClick={props.clickHandler}>
           {props.value} 
        </button>
    );
}

export default NavItems;
