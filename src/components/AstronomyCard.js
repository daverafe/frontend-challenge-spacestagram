import React, {useState} from 'react'

function AstronomyCard({data}) {

    const [liked, setLiked] = useState(false)

    const handleClick = (event) => {
        if(liked === false){
            setLiked(true)
            event.target.innerText = "liked" 
        } else {
            setLiked(false)
            event.target.innerText = "like"
        }
    }

    return (
        <div>
            <h3>{data.title}</h3>
            <img src={`${data.url}`} alt="space"/>
            <button onClick={(event) => handleClick(event)}>Like</button>
        </div>
    )
}

export default AstronomyCard
