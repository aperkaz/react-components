// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import underlineAnimation from './default';

const Element = () => (
  <div style={{
        padding: '10px 0',
        borderColor: '#80808075',
        borderRadius: '4px',
    }}
  >
        Element
  </div>
);

const UnderlinedElement1 = underlineAnimation('blue', '2')(Element);
const UnderlinedElement2 = underlineAnimation('grey', '4')(Element);

setAddon(JSXAddon);

storiesOf('Animations/Underline', module)
  .addDecorator(host({
    title: 'Underline animation',
    align: 'center middle',
  }))
  .addWithJSX('blue', withNotes('Underline animation. Blue color and 2px height.')(() =>
    <UnderlinedElement1 />))
  .addWithJSX('grey', withNotes('Underline animation. Grey color and 4px height.')(() =>
    <UnderlinedElement2 />));
