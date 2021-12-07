import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const ToyList = (props) => {

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

export default ToyList;