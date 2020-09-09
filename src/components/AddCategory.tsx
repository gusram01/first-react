import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import PropTypes from 'prop-types';

interface Props {
  setCategories: Dispatch<SetStateAction<string[]>>;
}

const AddCategory: React.FC<Props> = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(category => [inputValue, ...category]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} />
    </ form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;