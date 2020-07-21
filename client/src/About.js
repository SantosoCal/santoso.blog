import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import { Image } from 'react-bootstrap';
import { device } from './device.js';

const Styles = styled.div`
    .container {
        justify-content: center;
        align-items: center;
        font-family: Helvetica, sans-serif;
    }
    .body {
        text-align: left;
        line-height: 2.0;
        margin: auto;

        @media ${device.mobileS} { 
            width: 100%;
            font-size: medium;
        }

        @media ${device.tablet} {
            width: 85%;
            font-size: medium;
        }

        @media ${device.laptop} { 
            width: 70%;
            font-size: large;
        }
    }
    .profilePhoto {
        height: 100%;
        width: 100%;
        object-fit: cover;
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

const bio = '   In the late summer of that year we lived in a house in a village that looked across the river and the plain to the mountains. In the bed of the river there were pebbles and boulders, dry and white in the sun, and the water was clear and swiftly moving and blue in the channels. Troops went by the house and down the road and the dust they raised powdered the leaves of the trees. The trunks of the trees too were dusty and the leaves fell early that year and we saw the troops marching along the road and the dust rising and leaves, stirred by the breeze, falling and the soldiers marching and afterwards the road bare and white except for the leaves.'
const bio2 = '  The plain was rich with crops; there were many orchards of fruit trees and beyond the plain the mountains were brown and bare. There was fighting in the mountains and at night we could see the flashes from the artillery. In the dark it was like summer lightning, but the nights were cool and there was not the feeling of a storm coming.'
const bio3 = '  Sometimes in the dark we heard the troops marching under the window and guns going past pulled by motor- tractors. There was much traffic at night and many mules on the roads with boxes of ammunition on each side of their pack-saddles and grey motor-trucks that carried men, and other trucks with loads covered with canvas that moved slower in the traffic. There were big guns too that passed in the day drawn by tractors, the long barrels ofthe guns covered with green branches and green leafy branches and vines laid over the tractors. To the north we could look across a valley and see a forest of chestnut trees and behind it another mountain on this side of the river.'

export default class About extends React.Component {
    render() {
        return (
            <Styles>
                <br></br>
                <br></br>
                <br></br>
                <Container className="container" fluid>
                    <Container className="imageContainer" fluid>
                        <Image className="profilePhoto" src="https://article-images-2020.s3.us-east-2.amazonaws.com/Austin/profile_pic.jpg" style={{width: 300, height: 300}} roundedCircle/>
                    </Container>
                    <br></br>
                    <br></br>
                    <Container className="titleContainer" fluid>
                        <h2 className="title">About Me</h2>
                    </Container>
                    <br></br>
                    <br></br>
                    <Container className="body" fluid>
                        <p>Here are the facts about me you were probably looking for:</p> 

                        <p>I am 21 years old. I was born and raised in Thousand Oaks, California, a comfy suburb an hour from both Santa Barbara and Los Angeles. I am a senior studying computer science and philosophy at UC Berkeley. </p>

                        <p>Some day I will open my own restaurant or coffee shop, or perhaps both. But until then I will be a software engineer and I aspire to start my own company.</p>

                        <p>I am an avid reader. I read a lot of nonfiction and classic literature. </p>

                        <p>I like to cook. My favorite dish to cook for my family is a chicken sandwich.</p>

                        <p>I run every day because it makes me feel good, and to prepare for the next half-marathon, whenever that may be, given the current pandemic.</p>

                        <p>I drink coffee every morning. My favorite coffee is the Philtered Soul from Philz.</p>

                        <p>Since turning 21 I’ve enjoyed going out to bars with friends and trying different wines with my dad.</p>

                        <p>I spend most of my money on rent, food and drinks, and travel.</p>
                    </Container>
                    <br></br>
                    <br></br>
                    <Container className="titleContainer" fluid>
                        <h2 className="title">Links I Like</h2>
                    </Container>
                    <br></br>
                    <br></br>
                    <Container className="body" fluid>
                        <ul>
                            <li><a href="https://www.jordanbpeterson.com" target="_blank">Jordan Peterson</a></li>
                            <li><a href="https://www.instagram.com/cameronrhanes/" target="_blank">Cameron Hanes</a></li>
                            <li><a href="https://www.youtube.com/channel/UCbVEx9qG_hLrb6FrWQJz_Tg" target="_blank">Nick Bare</a></li>
                            <li><a href="https://www.npr.org/podcasts/510313/how-i-built-this" target="_blank">How I Built This</a></li>
                            <li><a href="https://www.npr.org/podcasts/510313/how-i-built-this" target="_blank">Paul Graham</a></li>
                            <li><a href="https://kortina.nyc" target="_blank">Andrew Kortina</a></li>
                            <li><a href="https://www.youtube.com/watch?v=5tSTk1083VY" target="_blank">JRE #1080 - David Goggins</a></li>
                        </ul>
                    </Container>
                    <br/>
                    <br/>
                </Container>
            </Styles>

        )
    }
}
