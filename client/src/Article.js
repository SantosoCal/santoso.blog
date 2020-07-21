import React from 'react';
import styled from 'styled-components';

import { beautifyDate } from './Helpers';
import { device } from './device.js';

const Styles = styled.div`
    .container {
        justify-content: center;
        align-items: center;
        margin: auto;

        @media ${device.mobileS} { 
            width: 95%;
        }

        @media ${device.tablet} {
            width: 80%;
        }

        @media ${device.laptop} { 
            width: 60%;
        }
    }
    .body {
        text-align: left;
        line-height: 2.0;
        margin: auto;

        font-size: large;

        @media ${device.mobileS} { 
            font-size: medium;
        }

        @media ${device.tablet} {
            font-size: medium;
        }

        @media ${device.laptop} { 
            font-size: large;
        }
        font-family: Helvetica, sans-serif;
    }
    .coverPhoto {
        height: 100%;
        width: 100%;
    }
    .title {
        z-index: 2;
        font-family: Georgia, serif;
        font-size: xxx-large;
        font-weight: 900;
        margin: auto;
        position: relative;
    }
    .date {
        z-index: 2;
        font-family: Georgia, serif;
        font-size: x-large;
        font-weight: 500;
        margin: auto;
        position: relative;
    }
    .titleAndDateContainer {
        position: relative;
        text-align: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
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
`;

export default class Article extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {article: props.location.state}
    }

    render() {
        if (this.state === null) return <p>Loading ...</p>;
        if (this.state) {
            return (
                <Styles>
                    <div className="container">
                        <div className="imageContainer">
                            <img className="coverPhoto" src={this.state.article.article.coverPhotoLink}></img>
                        </div> 
                        <br></br>
                        <br></br>
                        <div className="titleAndDateContainer">
                            <h1 className="title">{this.state.article.article.title}</h1>
                            <br></br>
                            <h4 className="date"><i>{beautifyDate(this.state.article.article.date)}</i></h4>
                        </div>
                        <div className="body" dangerouslySetInnerHTML={{__html: this.state.article.article.text}}/>
                    </div>
                </Styles>
            )
        }
    }
}