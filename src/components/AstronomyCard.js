import React, {useState} from 'react'
import {Col, Card, Button} from 'react-bootstrap'

function AstronomyCard({data}) {

    const [liked, setLiked] = useState(false)
    const [explanation, setExplanation] = useState("")

    const handleLike = (event) => {
        if(liked === false){
            setLiked(true)
            event.target.innerText = "liked" 
        } else {
            setLiked(false)
            event.target.innerText = "like"
        }
    }

    const handleExplanation = (event) => {
        if(explanation === "") {
            setExplanation(data.explanation)
            event.target.innerText = "See Less Info"
        } else {
            setExplanation("")
            event.target.innerText = "See More Info"
        }
    }

    return (
        <>
        <Col>
           <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={`${data.url}`} alt="space" />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.date}
                    </Card.Text>
                    <Card.Text>
                        {explanation}
                    </Card.Text>
                    <Button variant="primary" onClick={(event) => handleLike(event)}>Like</Button>
                    <Button variant="primary" onClick={(event) => handleExplanation(event)}>See More Info</Button>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}

export default AstronomyCard
