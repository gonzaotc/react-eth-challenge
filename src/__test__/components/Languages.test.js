import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = shallow(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has at least 2 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });

});
