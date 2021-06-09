import React from 'react';
import {Container} from 'react-bootstrap';

export function LayoutComponent(props){
    return(
    <Container>
        {props.children}
    </Container>
    )
}
