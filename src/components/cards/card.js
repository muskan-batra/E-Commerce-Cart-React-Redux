import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import Cardsdata from './cardsData';


const Cards = () => {
  const [data, setData] = useState(Cardsdata);   //usestate hook
  return (
    <div className='container mt-3'>
    <h2 className='text-center'>Add to Cart Projects</h2>

    <div className="row ">
      {
        data.map((element,id) => {
          return (
            <div className="col-md-4" key={id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={element.imgdata} />
            <Card.Body>
              <Card.Title>{element.rname}</Card.Title>
             
               <Card.Text>
               Price : $ {element.price}
              </Card.Text>
             
              <Button variant="primary" className='col-lg-12 '>Add to Cart</Button>
            </Card.Body>
   
            </Card>
            </div>
          );
        })
      }
    </div>
  </div>
  );
};

export default Cards;


