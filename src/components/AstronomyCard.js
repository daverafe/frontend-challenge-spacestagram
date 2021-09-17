import React, {useState} from 'react'

function AstronomyCard({data}) {

    const [liked, setLiked] = useState(false)

    const handleClick = () => {
        liked === false ? setLiked(true) : setLiked(false)
    }

    return (
        <div>
            <h3>{data.title}</h3>
            <img src={`${data.url}`} alt="space"/>
            <button onClick={() => handleClick()}>Like</button>
        </div>
    )
}

export default AstronomyCard
