import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import React from 'react';

describe('test a <GifExpertApp />', () => {
  test('Hacer match con el snapshot', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should', () => {
    const categories = ['One Punch', 'Naruto'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot(); //Verificar que cambie el snapshot
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
