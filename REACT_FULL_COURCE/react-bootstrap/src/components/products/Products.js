import React from "react";
import "./product.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Headphone1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente.",
      img: "https://media.istockphoto.com/photos/neon-sign-on-a-brick-wall-cannabis-weed-marijuana-leaf-icon-abstract-picture-id1306435819?b=1&k=20&m=1306435819&s=170667a&w=0&h=SF8xZoGQ-ZHsxb9TGFRECWQYE4v0X-WlEdePss4MGiQ=",
    },
    {
      id: 2,
      title: "Headphone2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente.",
      img: "https://media.istockphoto.com/photos/neon-sign-on-a-brick-wall-cannabis-weed-marijuana-leaf-icon-abstract-picture-id1306435819?b=1&k=20&m=1306435819&s=170667a&w=0&h=SF8xZoGQ-ZHsxb9TGFRECWQYE4v0X-WlEdePss4MGiQ=",
    },

    {
        id: 3,
        title: "Headphone3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente.",
        img: "https://media.istockphoto.com/photos/neon-sign-on-a-brick-wall-cannabis-weed-marijuana-leaf-icon-abstract-picture-id1306435819?b=1&k=20&m=1306435819&s=170667a&w=0&h=SF8xZoGQ-ZHsxb9TGFRECWQYE4v0X-WlEdePss4MGiQ=",
      },

  
  ];
  return (
    <Container>
      <Row>
          {products.map(product => (
               <Col md={4} key={product.id}>
               <Card style={{ width: "18rem" }}>
                 <Card.Img
                   variant="top"
                   src={product.img}
                 />
                 <Card.Body>
                   <Card.Title>{product.title}</Card.Title>
                   <Card.Text>
                     {product.description}
                   </Card.Text>
                   <Button variant="primary">Buy</Button>
                 </Card.Body>
               </Card>
             </Col>
          ))}
        
      </Row>
    </Container>
  );
};

export default Products;
