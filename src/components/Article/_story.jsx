// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import Article from './default';

const props = {
  photo: {
    src: 'http://www.happylowcost.com/wp-content/uploads/2016/12/Paris-travel-AP65117955-xlarge.jpg',
    height: '300px',
    width: 'auto',
  },
  headline: 'Loren Ipsum',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed tincidunt mattis, mauris nisl tincidunt dui, eget imperdiet mauris arcu quis nisl. Curabitur viverra molestie dolor eu iaculis. Donec cursus vehicula blandit. Maecenas ipsum arcu, congue a ex ut, luctus aliquet augue. Suspendisse sit amet libero nulla. Proin nisl magna, rhoncus tristique elit eu, tincidunt tempor lectus. Maecenas tincidunt libero in ipsum euismod, vel scelerisque mauris pellentesque. Cras malesuada nisl sed scelerisque cursus. Suspendisse eleifend sem eget eros malesuada, quis placerat ligula suscipit. Nunc volutpat cursus turpis, a volutpat ante consequat eu. Nulla ultricies consequat eros, id gravida tellus tempor nec. Nullam aliquet arcu vitae turpis feugiat placerat vitae sit amet tortor. Proin orci ex, auctor sit amet pulvinar ac, finibus id nisi.',
};

setAddon(JSXAddon);

storiesOf('Components/Article', module)
  .addDecorator(host({
    title: 'Article',
    align: 'center middle',
    width: '800px',
  }))
  .addWithJSX(
    'default',
    withNotes('Article element for blog')(() => <Article {...props} />),
  );
