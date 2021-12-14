import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col, Button} from 'react-bootstrap'

const ToyList = (props) => {
  const [sortedToys, setSortedToys] = useState('forward')

  const sortToys = (toys) => {
    if (sortedToys === 'forward') {
      return toys.sort( (toyA, toyB) => toyA.name.localeCompare(toyB.name))
    }
    if (sortedToys === 'backward') {
      return toys.sort( (toyA, toyB) => toyB.name.localeCompare(toyA.name))}
}

  function HandleSortOptionChange() {
    setSortedToys('forward')
  }

  function HandleSortOptionChangeBackward() {
    setSortedToys('backward')
  }
    
  let toyArray = props.toys ? sortToys(props.toys) : null
  
  return (
    <div>
     <div className="alphabeticalDiv">
       <Button className="m-2" value="toy" onClick={HandleSortOptionChange}>Toys A-Z</Button>
        <Button className="m-2" value="toy" onClick={HandleSortOptionChangeBackward}>Toys Z-A</Button>
      </div>
      <Container fluid>
      <Row>
      {toyArray.map(toy =>
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
      
export default ToyList