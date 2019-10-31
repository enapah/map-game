import {configure} from '@storybook/react';

import '../src/index.scss';

const req = require.context('../src', true, /\.stories\.[tj]sx?$/);

configure(() => req.keys().forEach(filename => req(filename)), module);
