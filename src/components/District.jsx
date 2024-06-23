import React from 'react'
import { useState } from 'react'

const District = ({district, districtImg, districtDescription, districtTitle}) => {
    const [showFullDescription, setShowFullDescription] = useState(true)

    let description = district.description

    if(!showFullDescription) {
        description = description.substring(0,60) + '....';
    }
    
    return (
    <article className='districtCard'>
        <img src={districtImg} alt="districtImg" />
        <h1>{districtTitle}</h1>
        <p>{description}</p>
        <button onClick={()=> setShowFullDescription(!showFullDescription) }>{showFullDescription ? 'Less' : 'More'}</button>
    </article>
  )
}

export default District