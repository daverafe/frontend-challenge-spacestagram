import React, {useState} from 'react'
import {Col, Card, Button} from 'react-bootstrap'

function AstronomyCard({data}) {

    const [liked, setLiked] = useState(false)
    const [explanation, setExplanation] = useState("")

    const handleLike = (event) => {
        if(liked === false){
            setLiked(true)
            event.target.innerHTML = "<span>&#10084;</span>" 
        } else {
            setLiked(false)
            event.target.innerHTML = "Like<span>&#9825;</span>"
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
                    <Button id="like-bttn" variant="light" onClick={(event) => handleLike(event)}>Like<span>&#9825;</span></Button>
                    <Button variant="primary" onClick={(event) => handleExplanation(event)}>See More Info</Button>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}

export default AstronomyCard
