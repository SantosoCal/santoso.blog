import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    height: 60px;
    position: relative;
    left: 0;
    bottom: 0;
    text-align: center;
    width: 100%;
    font-size: small;
`;

export default class Footer extends React.Component {

    render() {
        return (
            <FooterContainer><p>© Andrew Santoso 2020. All rights reserved.</p></FooterContainer>
        )
    }
}