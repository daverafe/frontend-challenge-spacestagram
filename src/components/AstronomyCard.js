import React, {useState} from 'react'
import {Col, Card, Button} from 'react-bootstrap'

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
        <>
        <Col>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${data.url}`} alt="space" />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.date}
                    </Card.Text>
                    <Button variant="primary" onClick={(event) => handleClick(event)}>Like</Button>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}

export default AstronomyCard
