import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={country.flag} />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>{country.region}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
