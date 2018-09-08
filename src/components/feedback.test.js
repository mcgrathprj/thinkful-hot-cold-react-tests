import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Displays the correct string for 0 guesses', () => {
    let value = 0;
    let feedback = "Make Your Guess!";
    const wrapper = mount(<Feedback guessCount = {value} feedback = {feedback} />);
    expect(wrapper.text()).toEqual(`${feedback} `);
  })

  it('Displays the correct string for more than 0 guesses', () => {
    let value = 6;
    let feedback = "You\'re Cold!";
    const wrapper = mount(<Feedback guessCount = {value} feedback = {feedback} />);
    expect(wrapper.text()).toEqual(`${feedback} Guess again!`);
  })

})
