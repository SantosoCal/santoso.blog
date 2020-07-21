import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import { Image } from 'react-bootstrap';

const Styles = styled.div`
    .container {
        justify-content: center;
        align-items: center;
        font-family: Helvetica, sans-serif;
    }
    .profilePhoto {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    .titleContainer {
        position: relative;
        text-align: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        font-weight: 500;
    }
    .imageContainer {
        position: relative;
        text-align: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .fa {
        padding: 20px;
        font-size: 30px;
        width: 69px;
        text-align: center;
        text-decoration: none;
        margin: 5px 15px;
        border-radius: 50%;
      }
    .fa:hover {
        opacity: 0.7;
    }
    .fa-facebook {
      background: #3B5998;
      color: white;
    }
    .fa-linkedin {
        background: #007bb5;
        color: white;
    }
    .fa-github {
        background: #000000;
        color: white;
    }
    .contactInfo {
        text-align: center;
        font-size: large;
        line-height: 1.3;
        align-items: center;
        justify-content: center;
    }
`;

export default class About extends React.Component {
    render() {
        return (
            <Styles>
                    <br></br>
                    <br></br>
                    <br></br>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <Container className="container" fluid>
                        <div className="imageContainer">
                            <Image className="profilePhoto" src="https://article-images-2020.s3.us-east-2.amazonaws.com/Austin/profile_pic.jpg" style={{width: 300, height: 300}} roundedCircle/>
                        </div> 
                        <br></br>
                        <br></br>
                        <Container className="titleContainer" fluid>
                            <h2 className="title">Contact Me</h2>
                        </Container>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Container className="contactInfo" fluid>
                            <a href="https://www.facebook.com/andrew.santoso.7" target="_blank" class="fa fa-facebook"></a>
                            <a href="https://www.linkedin.com/in/andrewsantosocal/" target="_blank" class="fa fa-linkedin"></a>
                            <a href="https://www.github.com/santosocal/" target="_blank" class="fa fa-github"></a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4>andrew@santoso.blog</h4>
                            <br></br>
                            <br></br>
                        </Container>
                        <br/>
                        <br/>
                    </Container>
                </Styles>

        )
    }
}
