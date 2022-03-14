import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import img from "../../src/dev.jpg";

export class Bootstrap extends Component {
  render() {
    return (
      <div>
        <Button>ClickMe</Button>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Bootstrap;
