import React, { Component } from 'react';
import ArticleTable from './components/ArticleTable';
import Container from 'react-bootstrap/Container';
import Jumbotron from './components/Jumbotron';
import axios from 'axios';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
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
    .aboutContainer {
        text-align: left;
        line-height: 2.0;
        padding: 0em;

        @media ${device.mobileS} { 
            width: 85%;
            font-size: medium;
        }

        @media ${device.tablet} {
            width: 80%;
            font-size: medium;
        }

        @media ${device.laptop} { 
            width: 80%;
            font-size: large;
        }
        font-family: Helvetica, sans-serif;
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
        font-family: Helvetica, sans-serif;
    }
`;

const test = '   In the late summer of that year we lived in a house in a village that looked across the river and the plain to the mountains. In the bed of the river there were pebbles and boulders, dry and white in the sun, and the water was clear and swiftly moving and blue in the channels. Troops went by the house and down the road and the dust they raised powdered the leaves of the trees. The trunks of the trees too were dusty and the leaves fell early that year and we saw the troops marching along the road and the dust rising and leaves, stirred by the breeze, falling and the soldiers marching and afterwards the road bare and white except for the leaves.';

export default class Home extends Component {

    state = {
        articles: []
    }

    componentDidMount(){
        this.getArticles();
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

    render() {
        let { articles } = this.state;
        return (
            <Styles>
                <Container className="container">
                    <Jumbotron title="Welcome" subtitle="Read. Run. Repeat."/>
                    <div className="bar"></div>
                    <br></br>
                    <Container className="aboutContainer" fluid>
                        <p>My name is Andrew Santoso. I am interested in the intersection of technology, philosophy, culture, and productivity. I engage these interests through literature, travel, and the development of good habits.</p>  
                        <p>I am set to graduate from UC Berkeley in the Fall with degrees in computer science and philosophy. Right now I am working as a software engineering intern for the Apple News team at Apple.</p> 
                        <p>My <Link to='/about'>about me</Link> page is closer to the real thing. Feel free to <Link to='/subscribe'>subscribe</Link> to receive updates.</p>  
                    </Container>
                    <br></br>
                    <Container className="articlesContainer" fluid>
                        <h2 className="articlesHeader">Recent Articles</h2>
                        <br></br>
                        <ArticleTable articles={articles}/>
                    </Container>
                </Container>
            </Styles>
        )
    }
}