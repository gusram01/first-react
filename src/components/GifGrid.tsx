import React from 'react';
import GifGridItem from './GiFGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { RespDataGiphy } from '../types/auxTypes';

interface Props {
  category: string;
}

const GifGrid: React.FC<Props> = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">

        {
          images.map((image: Partial<RespDataGiphy>) =>
            < GifGridItem
              key={image.id}
              img={image} />
          )
        }
      </div>
    </>
  )

}

export default GifGrid;