// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import Carousel from './default';

const options = {
  showArrows: false,
  showStatus: false,
  infiniteLoop: true,
  emulateTouch: true,
  showThumbs: false,
  dynamicHeight: true,
};

setAddon(JSXAddon);

storiesOf('Components/Carousel', module)
  .addWithJSX(
    'default',
    withNotes('Carousel component, build with https://github.com/akiran/react-slick')(() => <Carousel options={options} />),
  );
