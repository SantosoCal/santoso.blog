import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Jumbotron from './components/Jumbotron';
import styled from 'styled-components';
import ArticleTable from './components/ArticleTable';

import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';
import { device } from './device.js';

const Styles = styled.div`
    .articlesHeader {
        text-align: center;
    }
    .bar {
        background-color: #000000;
        height: 1.5px;
        position: relative;
        margin: auto;

        @media ${device.mobileS} { 
            width: 90%;
        }

        @media ${device.tablet} {
            width: 80%;
        }

        @media ${device.laptop} { 
            width: 80%;
        }
    }
    .container {
        align-items: center;
        width: 100%;
    }
    .navbar {
        width: 80%;
        left: 10%;
        align-items:center;
        color: white !important;
        text-color: #000000;
        font-family: Helvetica, sans-serif;
    }
    .selected {
        border-bottom: 2px solid #000000;
    }
    .category {
        text-color: #000000;
        color: black !important;
        text-decoration: none;
    }
    .articlesContainer {
      @media ${device.mobileS} { 
          width: 100%;
      }

      @media ${device.tablet} {
          width: 95%;
      }

      @media ${device.laptop} { 
          width: 90%;
      }
      background-color: green;
  }
`;

export default class Articles extends React.Component {

  constructor(props) {
    super(props)

    this.hideArticleTable = this.hideArticleTable.bind(this)
    this.showArticleTable = this.showArticleTable.bind(this)
    this.checkURLforCategory = this.checkURLforCategory.bind(this)
    this.state = {
      articles: [],
      showArticleTable: true
    }
  }

  // guard against clicking links in NavDropdown -- ensures page re-render
  UNSAFE_componentWillReceiveProps(nextProps){

    if(!this.state.showArticleTable && nextProps.location.state.showArticleTable === true) {
      this.setState({
        showArticleTable: true,
      })
    }

    if (this.state.showArticleTable && nextProps.location.state.showArticleTable === false) {
      this.setState({
        showArticleTable: false,
      })
    }
  }

  componentDidMount(){
      this.getArticles()
      this.checkURLforCategory()
  }

  checkURLforCategory() {
    const urlPath = this.props.location.pathname
    const indexBackslash = urlPath.lastIndexOf('/')
    const cat = urlPath.substring(indexBackslash + 1)
    
    if (cat === "articles") {
      this.showArticleTable()
    } else {
      this.hideArticleTable()
    }
  }

  getArticles = () => {
      axios.get('/api/')
        .then(res => {
          if(res.data){
            this.setState({
              articles: res.data
            })
          }
        })
        .catch(err => console.log(err))
  }

  // Hides when category is selected
  hideArticleTable() {
    this.setState({
      showArticleTable: false
    })
  }

  // Show when category is not selected
  showArticleTable() {
    this.setState({
      showArticleTable: true
    })
  }

  render() {
    let { articles } = this.state;
    return (
      <Styles>
        <Container className="container">
            <Jumbotron title="Articles" subtitle="Enjoy." link={`/articles`}/>
            <div className="bar"></div>
            <br></br>
            <Container className="navBarContainer">
                <Nav className="navbar" fill>
                  <Nav.Item>
                    <NavLink className="category" activeClassName="selected" to={{pathname:`${this.props.match.url}/essays`, state: {showArticleTable: false}}}>Essays</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="category" activeClassName="selected" to={{pathname:`${this.props.match.url}/travels`, state: {showArticleTable: false}}}>Travels</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="category" activeClassName="selected" to={{pathname:`${this.props.match.url}/productivity`, state: {showArticleTable: false}}}>Productivity</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="category" activeClassName="selected" to={{pathname:`${this.props.match.url}/ideas`, state: {showArticleTable: false}}}>Ideas</NavLink>
                  </Nav.Item>
                </Nav>
                <br></br>
              </Container>
              <Container className="articlesContainer" fluid>
                {this.state.showArticleTable && <ArticleTable articles={articles}/>}
              </Container>
              <Route path={`${this.props.match.path}/:category`} render={(props) => <ArticleTable {...props} articles={articles}/> } />
        </Container>
      </Styles>
    )
  }
}