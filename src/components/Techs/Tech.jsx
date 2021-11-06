import React from 'react'

export default function Tech(props) {
    return (
        <div className='tech'>  
            {props.icon}
            {props.value}
        </div>
    )
}
