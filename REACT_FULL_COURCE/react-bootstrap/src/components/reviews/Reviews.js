import React, { Component } from 'react'
import { Button , Card , Col , Row , Container , Spinner  } from 'react-bootstrap';
import "./reviews.css";

export class Reviews extends Component {
   constructor(props){
       super(props)
       console.log("inside constructor")
       this.state = {
         products : []
       }
   } 

   componentDidMount(){
     console.log("Inside the componentDidMount")
     setTimeout(() => {
      this.setState({
        products : [
          {
            id: 1,
            title: "Headphone1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente.",
            img: "https://media.istockphoto.com/photos/neon-sign-on-a-brick-wall-cannabis-weed-marijuana-leaf-icon-abstract-picture-id1306435819?b=1&k=20&m=1306435819&s=170667a&w=0&h=SF8xZoGQ-ZHsxb9TGFRECWQYE4v0X-WlEdePss4MGiQ=",
            addedToCart : false,
          },
          {
            id: 2,
            title: "Headphone2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente.",
            img: "https://media.istockphoto.com/photos/neon-sign-on-a-brick-wall-cannabis-weed-marijuana-leaf-icon-abstract-picture-id1306435819?b=1&k=20&m=1306435819&s=170667a&w=0&h=SF8xZoGQ-ZHsxb9TGFRECWQYE4v0X-WlEdePss4MGiQ=",
            addedToCart : false,
          },
      
          {
              id: 3,
              title: "Headphone3",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente.",
              img: "https://media.istockphoto.com/photos/neon-sign-on-a-brick-wall-cannabis-weed-marijuana-leaf-icon-abstract-picture-id1306435819?b=1&k=20&m=1306435819&s=170667a&w=0&h=SF8xZoGQ-ZHsxb9TGFRECWQYE4v0X-WlEdePss4MGiQ=",
              addedToCart : false,
            },
        ]
      })
     },0)
     
   }


   addedToCart(id){
     console.log("addedToCart")
    //  let temp = this.state.products
    //  let updated = temp.filter(product => product.id !== id)
    //  let req = temp.find(product => product.id === id)

    //  req.addedToCart = true 

    //  updated.push(req)
    // or:
    //  req = {
    //    ...req,
    //    addedToCart : true
    //  }

    let updated = this.state.products
    updated[id-1].addedToCart = true

     this.setState({
         products : updated
     })
   }


  render() {
      console.log("inside render ")
    return (
      <div>
        {/* <h2>Customers : {this.state.products}</h2> */}
        <Container>
          {this.state.products.length === 0 ? (
           <Spinner animation="border" /> ):(
           <Row>
           {this.state.products.map((product) => (
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
                    <Button variant="primary" className='buy-button'>Buy</Button>
                    <Button variant="warning" className='cart-button'
                     onClick={() => {this.addedToCart(product.id)}}   //whenever we have to pass a value we have to use a callback,
                     //beacuse inside the callback we have to write which parameter it is dependent on here it is product
                    >
                      {product.addedToCart ? "ADDED TO CART" : "ADD TO CART"}
                      </Button>
                  </Card.Body>
                </Card>
              </Col>
           ))}
        
       </Row>      
           )}
     
    </Container>

    
      </div>
    )
  }
}

export default Reviews
