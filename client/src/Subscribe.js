import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { device } from './device.js';

const Styles = styled.div`
    .container {
        justify-content: center;
        align-items: center;
        // background-color: green;
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
    .emailContainer {
        position: relative;
        text-align: center;
        
        @media ${device.mobileS} { 
            width: 90%;
            font-size: medium;
        }

        @media ${device.tablet} {
            width: 70%;
            font-size: medium;
        }

        @media ${device.laptop} { 
            width: 50%;
            font-size: large;
        }
        font-family: Helvetica, sans-serif;
    }
    .emailInput {
        width: 100%;
        margin: auto;
    }
    .testLabel {
        display: inline-block;
        margin-bottom: 20px;
    }
    .row {
        margin-bottom: 10px;
    }
`;

export default class Subscribe extends React.Component {

    constructor(props) {
        super(props)
        this.hideEmailForm = this.hideEmailForm.bind(this)
        this.showEmailForm = this.showEmailForm.bind(this)
        this.state = {
          showEmailForm: true
        }
    }

    hideEmailForm() {
        this.setState({
            showEmailForm: false
        });
    }

    showEmailForm() {
        this.setState({
            showEmailForm: true
        });
    }

    // Uses MailChimp API
    handleClick = (event) => {
        event.preventDefault();

        const options = {
            headers: {'Authorization': 'apikey 8209bd2ccd97d41a31fa57b2b7cbe3bc-us10', 'Content-Type': 'application/json'}
        };

        const mailChimpURL = 'https://us10.api.mailchimp.com/3.0/lists/3fb49e72ba/members'

        axios.post(mailChimpURL, {
            email_address: this.input.value, // email_address: this.input.value,
            status: 'subscribed'
        }, options).then((response) => {
            console.log(response);
            this.hideEmailForm();
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Styles>
                <br></br>
                <br></br>
                <Container className='container' fluid>
                    <Container className="titleContainer" fluid>
                        <h2 className="title">Subscribe</h2>
                    </Container>
                    <br></br>
                    <Container className="emailContainer" fluid>
                        {this.state.showEmailForm && 
                            <Form onSubmit={this.handleClick} >
                                <Form.Group>
                                    <Form.Label className="testLabel">Get My Newsletter and Latest Posts in Your Inbox</Form.Label>
                                    <Form.Row className="row">
                                        <Form.Control ref={(ref) => {this.input = ref}} type="email" placeholder="Enter email" className="emailInput" />
                                    </Form.Row>
                                    <Form.Row className="row">
                                        <Button variant="primary" type="submit" block>Subscribe</Button>
                                    </Form.Row>
                                </Form.Group>
                            </Form>
                        }
                        {!this.state.showEmailForm && 
                            <Container fluid>
                                <h3>Thanks for Subscribing!</h3>
                                <p>You'll be glad you did.</p>
                            </Container>
                        }
                    </Container>
                </Container>
            </Styles>
        )
    }
}
