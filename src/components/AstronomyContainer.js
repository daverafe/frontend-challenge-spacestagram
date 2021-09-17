import React from 'react'
import AstronomyCard from './AstronomyCard'

function AstronomyContainer({astronomyData}) {
    return (
        <div>
            {astronomyData.map((data, index) => {
                return <AstronomyCard key={index} data={data}/>
            })}
        </div>
    )
}

export default AstronomyContainer
