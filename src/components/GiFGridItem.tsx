import React from 'react';
import { RespDataGiphy } from '../types/auxTypes';
import PropTypes from 'prop-types';

interface Props {
  img: Partial<RespDataGiphy>;
}

const GifGridItem: React.FC<Props> = ({ img }) => {

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  )

}

GifGridItem.propTypes = {
  img: PropTypes.object.isRequired
}

export default GifGridItem;


