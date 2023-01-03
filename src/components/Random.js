import React from 'react';
import './Random.css'

const Random = ({min, max}) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    return (
        <div className="randomNumber">
        <span>Random value between {min} and {max} {'=>'} {randomNumber}</span>
    </div>

    )
}
  export default Random;