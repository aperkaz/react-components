import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

const req = require.context("..", true, /_story\.jsx?$/);

addDecorator(withKnobs);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
