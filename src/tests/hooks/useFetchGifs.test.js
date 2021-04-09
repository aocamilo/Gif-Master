import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba a custom hook useFetchGifs', () => {
  test('debe retornar el estado inicial', async () => {
    //Hooks solo pueden ser llamados desde un functional component
    //Usamos react hooks testing library

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Naruto')
    ); //Render a hook inside an anon funct
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();

    //Luego de que se termina hace unmount del component. Incluso hizo el effect para actualizar
  });

  //Probar cuando el hook cambia de estado
  test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Naruto')
    ); //Wait for Next Update tells when a changed happened in the custom hook
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBeFalsy();
  });
});
