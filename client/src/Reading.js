import React from 'react';
import styled from 'styled-components';
import Jumbotron from './components/Jumbotron';
import Container from 'react-bootstrap/Container';

import { device } from './device.js';

const Styles = styled.div`
    .bar {
        background-color: #000000;
        height: 1.5px;
        position: relative;
        margin: auto;

        @media ${device.mobileS} {
            width: 100%;
        }

        @media ${device.tablet} {
            width: 80%;
        }

        @media ${device.laptop} {
            width: 70%;
        }
    }
    .container {
        align-items: center;
        text-align: center;
    }
    .categoryContainer {
        align-items: center;
        text-align: center;
        margin-bottom: 30px;

        @media ${device.mobileS} {
            width: 100%;
        }

        @media ${device.tablet} {
            width: 85%;
        }

        @media ${device.laptop} {
            width: 70%;
        }
    }
    .bigContainer {
        align-items: center;
        margin: auto;
        font-family: Helvetica, sans-serif;

        @media ${device.mobileS} { 
            font-size: medium;
        }

        @media ${device.tablet} {
            font-size: medium;
        }

        @media ${device.laptop} { 
            font-size: large;
        }
    }
    .booksListContainer {
        text-align: left;

        @media ${device.mobileS} {
            width: 100%;
        }

        @media ${device.tablet} {
            width: 85%;
        }

        @media ${device.laptop} {
            width: 70%;
        }

    }
    .categoryLabel {
        margin-bottom: 20px;
        text-align: center;
    }
`;

export default class Reading extends React.Component {
    render() {
        return (
            <Styles>
                <Container className="bigContainer" fluid>
                    <Container className="container"fluid>
                        <Jumbotron title="Reading List" subtitle="Books I Like."/>
                        <div className="bar"></div>
                    </Container>
                    <br></br>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Literature</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>Crime and Punishment by Fyodor Dostoyevsky</li>
                                <li>Notes from Underground Fyodor Dostoyevsky</li>
                                <li>For Whom the Bell Tolls by Ernest Hemingway</li>
                                <li>A Farewell to Arms by Ernest Hemingway</li>
                                <li>The Old Man and the Sea by Ernest Hemingway</li>
                                <li>The Great Gatsby by Scott Fitzgerald</li>
                                <li>This Side of Paradise by Scott Fitzgerald</li>
                                <li>Call of the Wild by Jack London</li>
                                <li>Farenheit 451 by Ray Bradbury</li>
                                <li>The Grapes of Wrath by John Steinbeck</li>
                                <li>Island by Aldous Huxley</li>
                                <li>1984 by George Orwell</li>
                                <li>Dharma Bums by Jack Kerouac</li>
                                <li>On the Road by Jack Kerouac</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Nonfiction</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>Flow by Mihaly Csikszentmihalyi</li>
                                <li>Grit by Angela Duckworth</li>
                                <li>The Bell Curve by Charles Murray and Richard Herrnstein</li>
                                <li>Liar's Poker by Michael Lewis</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Self-Help</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>The Power of Habit by Charles Duhigg</li>
                                <li>How to Win Friends and Influence People by Dale Carnegie</li>
                                <li>12 Rules for Life by Jordan Peterson</li>
                                <li>Principles by Ray Dalio</li>
                                <li>Unlimited Power by Tony Robbins</li>
                                <li>Think and Grow Rich by Napoleon Hill</li>
                                <li>The Subtle Art of Not Giving a F*ck by Mark Manson</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Biography and Memoir</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>Steve Jobs by Walter Isaacson</li>
                                <li>Elon Musk by Ashlee Vance</li>
                                <li>The Glass Castle by Jeannette Walls</li>
                                <li>Unbroken by Laura Hillenbrand</li>
                                <li>Man's Search for Meaning by Viktor Frankl</li>
                                <li>A Moveable Feast by Ernest Hemingway</li>
                                <li>Can't Hurt Me by David Goggins</li>
                                <li>"Surely You're Joking, Mr. Feynman!" by Richard Feynman</li>
                                <li>On Writing by Stephen King</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Economics and Money</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>Steve Jobs by Walter Isaacson</li>
                                <li>Elon Musk by Ashlee Vance</li>
                                <li>The Glass Castle by Jeannette Walls</li>
                                <li>Unbroken by Laura Hillenbrand</li>
                                <li>Man's Search for Meaning by Viktor Frankl</li>
                                <li>A Moveable Feast by Ernest Hemingway</li>
                                <li>Can't Hurt Me by David Goggins</li>
                                <li>"Surely You're Joking, Mr. Feynman!" by Richard Feynman</li>
                                <li>On Writing by Stephen King</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Philosophy</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>Walden by Henry David Thoreau</li>
                                <li>Nature by Ralph Waldo Emerson</li>
                                <li>The Myth of Sisyphus by Albert Camus</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Contemporary Fiction</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>The Rosie Project by Graeme Simsion</li>
                            </ol>
                        </Container>
                    </Container>
                    <Container className="categoryContainer" fluid="sm">
                        <h2 className="categoryLabel">Currently Reading</h2>
                        <Container className="booksListContainer" fluid>
                            <ol>
                                <li>White Fang by Jack London</li>
                            </ol>
                        </Container>
                    </Container>
                </Container>
            </Styles>
        )
    }
}
