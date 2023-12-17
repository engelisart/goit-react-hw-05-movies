import { useState } from 'react';
import { SearchForm } from './SearchBar.styled';

export const SearchBar = ({ handleChangeMovie }) => {
  const [movie, setMovie] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleChangeMovie(movie);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder=""
          value={movie}
          onChange={e => {
            setMovie(e.target.value);
          }}
          autoComplete="off"
        />
        <button>Search</button>
      </SearchForm>
    </>
  );
};
