import React from 'react';
import {shallow, mount} from 'enzyme';

import Gane from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

})
