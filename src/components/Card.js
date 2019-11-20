import React from 'react'
const  Card = ({name, image, id}) =>{
    return (
        <div key={id}>
        <p>{name}</p>
        <img src={image}  alt={name} />
        </div>
    )
}


export default Card