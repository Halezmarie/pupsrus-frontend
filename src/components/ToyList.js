import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { sortToys, filterReview } from "../helpers/toyHelpers";

const ToyList = ({ toys }) => {
  const [sortDirection, setSortDirection] = useState("forward");
  const [reviewFilter, setFilter] = useState("off");

  function HandleSortOptionChange() {
    setSortDirection("forward");
  }

  function HandleSortOptionChangeBackward() {
    setSortDirection("backward");
  }

  function HandleFilterWithReviews() {
    setFilter("on");
  }

  function ResetFilter() {
    setFilter("off");
  }

  let toyArray = toys ? sortToys(toys, sortDirection) : null;
  let filteredToys = filterReview(toyArray, reviewFilter);

  return (
    <div>
      <div className="alphabeticalDiv">
        <Button className="m-2" value="toy" onClick={HandleSortOptionChange}>
          Toys A-Z
        </Button>
        <Button
          className="m-2"
          value="toy"
          onClick={HandleSortOptionChangeBackward}
        >
          Toys Z-A
        </Button>
      </div>
      <div className="filterByReviews">
        <Button className="m-2" value="toy" onClick={HandleFilterWithReviews}>
          Toys with Reviews{" "}
        </Button>
        <Button className="m-2" value="toy" onClick={ResetFilter}>
          Reset{" "}
        </Button>
      </div>
      <Container fluid>
        <Row>
          {filteredToys.map((toy) => (
            <Col key={toy.id}>
              <Card style={{ width: "17rem" }} className="text-center">
                <Link to={`/toys/${toy.id}`}>
                  {toy.name}
                  <Card.Img
                    variant="top"
                    src={toy.image_url}
                    alt="toy-image"
                    width="300"
                    height="300"
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};





export default ToyList;
