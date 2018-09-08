import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Displays the correct property', () => {
    const wrapper = shallow(<AuralStatus auralStatus = "testing" />);
    expect(wrapper.text()).toEqual("testing");
  })

})
