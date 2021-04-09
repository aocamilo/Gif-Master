import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  const { data: images, loading } = useFetchGifs(category);

  if (loading)
    return <p className='animate__animated animate__flash'>Loading...</p>;
  return (
    <>
      <h3> {category} </h3>
      <div className='card-grid'>
        {images.length > 0 &&
          images.map((img) => <GifGridItem key={img.id} {...img} />)}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
