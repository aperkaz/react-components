// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
// -- app --
import Button from './default';


setAddon(JSXAddon);

storiesOf('Component/Button', module)
    .addDecorator(host({
        title: 'Button',
        align: 'center middle',
        height: '40%',
        width: 200,
    }))
    .addWithJSX('with text', () => <Button text={text('Content', 'Foo')} />);
