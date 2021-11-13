import React from 'react'
import avatar from '../../img/Avatar.png'

export default function Photo() {
    return (
        <div className='photo-frame'>
            <img className='photo' src={avatar} alt='avatar'/>
        </div>
    )
}
