import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import roadTrip from '../assets/roadTrip.jpg';
import { Link } from 'react-router-dom';
import Articles from '../Articles.js';

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    background-color: #ffffff;
    height: 50%
    margin: auto;
    color: #000000;
    z-index: 1;
    text-align: center;

    height: 180px;
  }
  .textContainer {
    font-size: large;
    font-style: normal;
    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: Helvetica, sans-serif;
  }
  .header {
    font-weight: 499;
  }
  .link{
    color: #000000;
    text-decoration: none;
  }
`;

export default class Jumbotron extends React.Component {

  render() {

    let header;
    if (this.props.link) {
      header = <Link to={{pathname: `${this.props.link}`, state: {showArticleTable: true}}} className="link"><h1 className="header">{this.props.title}</h1></Link>
    } else{
      header = <h1 h1 className="header">{this.props.title}</h1>
    }

    return (
      <Styles>
      <Jumbo className="jumbo" fluid>
        <Container className="textContainer" fluid>
          {header}
          <p>{this.props.subtitle}</p>
        </Container>
      </Jumbo>
      </Styles>
    )
  }
}

