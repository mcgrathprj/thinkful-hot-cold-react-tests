import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Displays the correct string for multiple guesses', () => {
    let value = 10;
    const wrapper = mount(<GuessCount guessCount = {value} />);
    expect(wrapper.text()).toEqual(`You have made ${value} guesses!`);
  })

  it('Displays the correct string for one guess', () => {
    let value = 1;
    const wrapper = mount(<GuessCount guessCount = {value} />);
    expect(wrapper.text()).toEqual(`You have made ${value} guess!`);
  })


})
