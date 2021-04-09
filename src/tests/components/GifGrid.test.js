import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //Mock todo lo que llamen de esta ruta

describe('Pruebas a <GifGrid />', () => {
  const category = 'Naruto';

  test('should show the correct component and match with the snapshot', () => {
    useFetchGifs.mockReturnValue({
      //Mock el return cuando se llame el hook
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se cargan imagenes usando useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa',
      },
      {
        id: 'ABD',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa',
      },
    ];

    useFetchGifs.mockReturnValue({
      //Mock el return cuando se llame el hook
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot(); // Prueba que el snapshot se haya actualizado
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length); //Search a custom component
  });
});
