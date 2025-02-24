import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = shallow(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience has at least 2 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(1);
  });

});
