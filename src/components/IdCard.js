import React from 'react'
import './IdCard.css'

const IdCard = ({firstName, lastName, gender, height, birth, picture}) => {
    return(
        <div className='identity'>
        <div className ='picture'>
        <img src={picture} alt=""/>
        </div>
        
        <div className='details'>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}</p>
        <p><b>Birth:</b> {birth}</p>
        </div>
     
        </div>

    )
}


export default IdCard;
