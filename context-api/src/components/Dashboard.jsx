import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Dashboard(){

    const {plen ,ulen} = useContext(ApiContext)
    return(
        <Card >
    
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Products :       {plen}
            <br />
            Users :       {ulen}
    
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
    
}