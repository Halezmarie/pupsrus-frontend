import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col, Button} from 'react-bootstrap'

const ToyList = (props) => {
  const [sortedToys, setSortedToys] = useState('forward')
  const [reviewFilter, setFilter] = useState('off')

  const sortToys = (toys) => {
    if (sortedToys === 'forward') {
      return toys.sort( (toyA, toyB) => toyA.name.localeCompare(toyB.name))
    }
    if (sortedToys === 'backward') {
      return toys.sort( (toyA, toyB) => toyB.name.localeCompare(toyA.name))
    }
  }

  const filterReview = (toys) => {
    if (reviewFilter === 'on') {
      return toys.filter(toy => toy.reviews.length > 0)
    } else if (reviewFilter === 'off') {
      return toys
    }
  }

  function HandleSortOptionChange() {
    setSortedToys('forward')
  }

  function HandleSortOptionChangeBackward() {
    setSortedToys('backward')
  }
  
  function HandleFilterWithReviews() {
    setFilter('on')
  }
  
  function ResetFilter() {
    setFilter('off')
  }
  
  let toyArray = props.toys ? sortToys(props.toys) : null
  let filteredToys = filterReview(toyArray)
  console.log(filteredToys)

  return (
    <div>
      <div className="alphabeticalDiv">
        <Button className="m-2" value="toy" onClick={HandleSortOptionChange}>Toys A-Z</Button>
        <Button className="m-2" value="toy" onClick={HandleSortOptionChangeBackward}>Toys Z-A</Button>
      </div>
      <div className="filterByReviews">
        <Button className="m-2" value="toy" onClick={HandleFilterWithReviews}>Toys with Reviews </Button>
        <Button className="m-2" value="toy" onClick={ResetFilter}>Reset </Button>
      </div>
      <Container fluid>
        <Row>
          {filteredToys.map(toy => 
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
  )
}
export default ToyList;