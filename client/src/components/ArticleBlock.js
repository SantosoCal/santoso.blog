import React from 'react';
import roadTrip from '../assets/roadTrip.jpg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ArticleInfo from '../components/ArticleInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .goToArticle {
    text-decoration: none !important;
  }
  .articleImageContainer {
    position: relative;
    text-align: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .articleImage {
    width: 100%;
    height: 95%;

    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  '
`;

// This is the block card that contains the components of each individual article (Image, text)
export default class ArticleBlock extends React.Component {
    
    render() {
        return (
            <Styles>
                <Link to={{pathname:`/article/${this.props.article._id}`, state: {article: this.props.article}}} className="goToArticle">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <Image className="articleImage" src={this.props.article.coverPhotoLink} fluid rounded></Image>
                            </Col>
                            <Col lg={true}>
                                <ArticleInfo title={this.props.article.title} synopsis={this.props.article.description} date={this.props.article.date}></ArticleInfo>
                            </Col>
                        </Row>
                        {/* <Row style={{ width: 'auto', height: 220 }}>
                            <Col className="articleImageContainer" xs={1} md={2} lg={4}>
                                <Image className="articleImage"src={this.props.article.coverPhotoLink} fluid rounded></Image>
                            </Col>
                            <Col>
                                <ArticleInfo title={this.props.article.title} synopsis={this.props.article.description} date={this.props.article.date}></ArticleInfo>
                            </Col>
                        </Row> */}
                    </Container>
                </Link>
            </Styles>
        )
    }
}