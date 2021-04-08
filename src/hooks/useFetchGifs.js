import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    getGifs(category).then((imgs) => {
      setState({
        loading: false,
        data: imgs,
      });
    });
  }, [category]);

  return state;
};
