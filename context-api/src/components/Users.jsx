import React, { useContext } from "react";
import { useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export function Users(){

    const {products,setUsers} = useContext(ApiContext)
        useEffect(()=>{
    
            fetch(`https://fakestoreapi.com/users`)
            .then(res => res.json())
            .then(res => setUsers(res))
    
        },[])
    return(
        <div className="container">
        <div className="row g-4 mt-5">
            {products.map((ele)=> (
            <div className="col-4">
                          <Card style={{ width: '18rem' }}>
                <Card.Img style={{height:"250px"}} src={ele.image}/>
                <Card.Body>
                  <Card.Title>{ele.title}</Card.Title>
                  <Card.Text>
                  {ele.price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
                          
                        </div>
                        ))}
        </div>
    </div>
    )
}