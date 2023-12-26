import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({user}) => {
  return (
    <div>
      <Card style={{ width: '18rem' , margin:"20" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.username}
          {user.email}
          {user.address.street}
          {user.address.suite} 
          {user.address.city} 
          {user.address.zipcode}
          {user.address.geo.lat}

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserList
