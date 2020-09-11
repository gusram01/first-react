import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import PropTypes from 'prop-types';

interface Props {
  defaultCategories?: string[];
}

const GifExpertApp: React.FC<Props> = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState(defaultCategories);
  // const handleAdd = () => {
  //   setCategories([...categories].concat('SaintSeiya'));
  // }


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category}
            />)
        }
      </ol>
    </>
  )
}

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array
}

export default GifExpertApp;