import React, { useEffect,useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export function Products(){

    const {users,setProducts} = useContext(ApiContext)
 
    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(res => setProducts(res))

    },[])

    return(
        <div className="container">
            <div className="row g-4 mt-5">
                {users.map((ele)=> (
                <div className="col-4">
                              <Card style={{ width: '18rem' }}>
                    {/* <Card.Img style={{height:"250px"}} src={ele.image}/> */}
                    <Card.Body>
                      <Card.Title>{ele.username}</Card.Title>
                      <Card.Text>
                      {ele.password}
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