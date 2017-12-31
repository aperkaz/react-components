// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
import styled from 'styled-components';
// -- app --
import underlineAnimation from './default';

const UnderlinedDiv = styled.div`
    padding: 15px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.color};    
    border-radius: 5px;
    ${props => underlineAnimation(props.color, props.height)}
`;


setAddon(JSXAddon);

storiesOf('Animations/Underline', module)
    .addDecorator(host({
        title: 'Underline animation',
        align: 'center middle',
    }))
    .addWithJSX('grey',  withNotes('Underline animation for Div. Grey color and 2px height.')(() =>
        <UnderlinedDiv color={text('Color', '#80808075')} height={text('Height', '2')}>
            Element
        </UnderlinedDiv>
    ))
    .addWithJSX('blue',  withNotes('Underline animation for Div. Blue color and 4px height.')(() =>
        <UnderlinedDiv color={text('Color', '#2255b7c7')} height={text('Height', '4')}>
            Element
        </UnderlinedDiv>
    ));