import React from 'react';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

const Styles = styled.div`
    .button{
        width: 100%;
    }
`;


export default class SubButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          buttonText: "Subscribe"
        }
      }

    handleClick = () => {
        this.setState({buttonText: "Subscribed!"})
      }
    
    render() {
        return (
            <Styles>
                <Button className="button" variant="primary" type="submit" onClick={this.handleClick} block>{this.state.buttonText}</Button>
            </Styles>
        )
    }
}