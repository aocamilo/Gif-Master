import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import React from 'react';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    //Resetear los mocks
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } }); // Simular el evento de cambio de un input
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la información onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} }); //Simular onSubmit con pasado de preventDefault
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    //1. simular el inputChange
    //2. simular el submit
    //3. setCategories se debe de haber llamado
    //4. el valor del input debe estar ''

    const value = 'Hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Que se halla llamado con una función
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
