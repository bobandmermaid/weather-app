import React from "react";

function Search(props) {

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddCity()
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        className='search__input'
        placeholder='Введите город...'
        onChange={event => props.setCity(event.target.value)}
        value={props.dataCity}
        minLength='2'
        maxLength='32'
        required
      />
      <button type="submit" className="button search__button">Искать</button>
    </form>
  );
}

export default Search;
