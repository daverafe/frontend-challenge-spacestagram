import React from 'react'
import AstronomyCard from './AstronomyCard'

function AstronomyContainer({astronomyData}) {
    return (
        <div>
            {astronomyData.map(data => {
                return <AstronomyCard data={data}/>
            })}
        </div>
    )
}

export default AstronomyContainer
