//import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import barProducts from '../../products';

function AccessoriesCard(){
  const accessoriescard = barProducts.filter((product)=> product.category === "Accessories");


  return (
    <div  className='Container'style={{
      justifyContent:'center',
      display: "flex",
      flexDirection: "row",
     flexWrap: "wrap",
      marginTop:'120px',
     }} >
    {accessoriescard.map((product)=>(
    <Card key = {product.id}
     style={{
      width: '30rem',
      height: '60vh',
      margin:"10px",
      justifyContent:'space-between',
      flexDirection:'column',
       border: ' 1px smokewhite solid',
       boxShadow: '10px 10px 10px  grey'
      }}>
      <Card.Img variant="top" src={product.image} style= {{height:'450px',width: "100%", objectFit: "cover",}} />
      <Card.Body  style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
             
              }} >
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.category}
          <br/>
         {product.description}
         <br/>
         {product.price}
        </Card.Text>
        <Button variant="primary" style={{alignSelf: "center", marginTop: "auto", }}>Add to Cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
}
export default AccessoriesCard;
