import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import roadTrip from '../assets/roadTrip.jpg';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
  .card {
    background: url(${roadTrip}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
`;

// export class Card extends React.Component