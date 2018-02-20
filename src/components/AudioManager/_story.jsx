/* eslint-disable import/no-unresolved */
// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import AudioManager from './default';

setAddon(JSXAddon);

storiesOf('Components/AudioManager', module)
  .addDecorator(host({
    title: 'CoverArt',
    align: 'center middle',
  }))
  .addWithJSX(
    'default',
    withNotes('Component for playback online-audio streams')(() => <AudioManager src={text('audio src', 'http://ice2.somafm.com/folkfwd-128-mp3')} />),
  );
