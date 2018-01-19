// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import Button from './default';

setAddon(JSXAddon);

storiesOf('Components/Button', module)
    .addDecorator(host({
        title: 'Button',
        align: 'center middle',
    }))
    .addWithJSX(
        'default',
        withNotes('A very simple button component')(() => <Button text={text('Content', 'Foo')} />),
    );
