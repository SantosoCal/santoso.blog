import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import ArticleBlock from '../components/ArticleBlock';

const Styles = styled.div`
  .row {
    text-align: center;
    color: black;
    transition: box-shadow .3s;
    border-radius: 5px;
  }
  .row:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
  .col {
    color: black;
  }
  '
`;

export default class ArticleTable extends React.Component {

  // Modern syntax >= React 16.2.0
  createTable = () => {

    // If there is a specific category to filter, then only show articles in that category
    var articlesList = this.props.articles
    if (this.props.match) {
      const category = this.props.match.params.category
      articlesList = this.props.articles.filter(function (e) {
        return e.category === category
      });
    }

    return (
      <Container fluid>
        {articlesList.map(a => (
          <React.Fragment>
            <ArticleBlock article={a}></ArticleBlock>
            <br></br>
          </React.Fragment>
        ))}
      </Container>
    )
  }

  render() {
    return (
      <Styles>
        <Container>
          {this.createTable()}
        </Container>
      </Styles>
    )
  }
}