import React from 'react'
import AstronomyCard from './AstronomyCard'
import {Container, Row} from 'react-bootstrap'

function AstronomyContainer({astronomyData}) {
    return (
        <div>
            <Container>
                <Row>
                    {astronomyData.map((data, index) => {
                        return <AstronomyCard key={index} data={data}/>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default AstronomyContainer
