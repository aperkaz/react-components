// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import CoverArt from './default';

setAddon(JSXAddon);

let props = {
    src: 'http://www.happylowcost.com/wp-content/uploads/2016/12/Paris-travel-AP65117955-xlarge.jpg',
    height: () => text('height', '200px'),
    width: () => text('width', '200px'),
};

storiesOf('Components/CoverArt', module)
    .addDecorator(host({
        title: 'CoverArt',
        align: 'center middle',
    }))
    .addWithJSX('default',
        withNotes('CoverArt component for Masonry')
        (() =>
            <CoverArt {...props} />
        ));