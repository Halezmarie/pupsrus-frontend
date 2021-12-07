import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

// rendering a list of toys

const ToyList = (props) => {

    // iterating over my data and making a list to display to the user
    return (
        <div>
        <Container fluid>
        <Row>
          {props.toys.map(toy =>
            <Col key={toy.id}>
                <Card style={{ width: '17rem' }} className='text-center'>
              <Link to={`/toys/${toy.id}`}>{toy.name}
              <Card.Img variant='top' src={toy.image_url} alt="toyimage" width="300" height="300" /></Link>
              </Card>
            </Col>
          )}
        </Row>
      </Container>     
        </div>
    )}
    
// need props first because it is the info being passed from the toy container to my child component of toys

export default ToyList;