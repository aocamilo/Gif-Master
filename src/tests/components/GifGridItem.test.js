import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    console.log(img.html()); //muestra el html
    console.log(img.props()); //muestra las propiedades
    console.log(img.prop('src')); //muestra la propiedad src

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe tener animate__bounce', () => {
    const expected = 'animate__bounce';
    const div = wrapper.find('div');
    expect(div.prop('className')).toContain(expected);
  });
});
