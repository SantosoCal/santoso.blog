import React from 'react';
import Container from 'react-bootstrap/Container';
import { beautifyDate } from '../Helpers';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    font-size: large;
    margin-top: 5px;
    font-family: Helvetica, sans-serif;
  }
  '
`;

// Contains a title and a paragraph explain the article.
export default class ArticleInfo extends React.Component {
    
    render() {
        return (
            <Styles>
                <Container className="container">
                    <h2 align="left">{this.props.title}</h2>
                    <p align="left">{this.props.synopsis}</p>
                    <p align="left"><i>{beautifyDate(this.props.date)}</i></p>
                </Container>
            </Styles>
        )
    }
}