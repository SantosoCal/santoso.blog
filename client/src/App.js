import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About' ;
import Contact from './Contact' ;
import Articles from './Articles.js';
import { NoMatch } from './NoMatch' ;
import NavigationBar from './components/NavigationBar' ;
import Article from './Article.js';
import Reading from './Reading.js';
import Footer from './components/Footer.js';
import Subscribe from './Subscribe.js';
import ScrollToTop from './ScrollToTop.js';
import styled from 'styled-components';
import './App.css';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

function App() {
  return (
    <PageContainer>
      <ContentWrapper>
      <Router>
          <ScrollToTop />
          <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/articles" component={Articles} />
              <Route path="/reading" component={Reading} />
              <Route path="/contact" component={Contact} />
              <Route path="/subscribe" component={Subscribe} />
              <Route exact path="/article/:articleTitle" component={Article}/>
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </ContentWrapper>
      <Footer/>
    </PageContainer>

  );
}

export default App;
