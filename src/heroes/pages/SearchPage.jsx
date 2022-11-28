import React from 'react'
import { HeroCard } from './../components/HeroCard';
import { useForm } from './../../shared/hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const SearchPage = () => {
  const _useNavigate = useNavigate();
  const _useLocation = useLocation();

  const { q = '' } = queryString.parse(_useLocation.search)

  const { searchText, onInputChange } = useForm({
    searchText: '',
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return; 

    _useNavigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>

          <form onSubmit={onSearchSubmit}>
            <input
              id="searchText"
              type="text" 
              placeholder='Search a hero' 
              name="searchText"
              autoComplete='off'
              className='form-control'
              value={searchText}
              onChange={onInputChange}
            />

            <button
              className='btn btn-outline-primary mt-1'
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>{ q }</b>
          </div>

          {/* <HeroCard /> */}

        </div>
      </div>
    </>
  )
}
