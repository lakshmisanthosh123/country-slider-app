import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountries, incrementPage } from '../store/store';
import axios from 'axios';
import CountryCard from './CountryCard';
import Slider from './Slider';
import { Container, Row, Button } from 'react-bootstrap';
import './Homepage.css';
const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const page = useSelector((state) => state.countries.page);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(`https://restcountries.com/v2/all?fields=name,region,flag`);
      dispatch(setCountries(response.data));
    };
    fetchCountries();
  }, [dispatch]);

  const loadMore = () => {
    dispatch(incrementPage());
    // Logic for loading more countries based on page
  };

  return (
    <Container>
     <header className="header">
      <h1>Countries</h1>
      <nav>
        <ul>
          <li><a href="#">All</a></li>
          <li><a href="#">Asia</a></li>
          <li><a href="#">Europe</a></li>
        </ul>
      </nav>
    </header>
     
      <Slider />
      <Row>
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </Row>
      <Button onClick={loadMore}>Load More</Button>
    </Container>
  );
};

export default Home;
