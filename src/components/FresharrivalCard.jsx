//import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import barProducts from '../../products';
import "../App.css"

function FresharrivalCard(){
  const fresharrival = barProducts.filter((product)=> product.tag === "Fresharrival");


  return (
    <div className="product-grid d-flex flex-wrap justify-content-center mt-5" style={{paddingTop:"60px"}}>
    {fresharrival.map((product) => (
      <Card key={product.id} style={{ width: '300px', margin: '10px', border: '1px solid smokewhite' }}>
        <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {product.category}
            <br />
            {product.description}
            <br />
            {product.price}
          </Card.Text>
          <Button variant="primary" style={{ alignSelf: 'center' }}>Add to Cart</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
  );
}
export default FresharrivalCard;
