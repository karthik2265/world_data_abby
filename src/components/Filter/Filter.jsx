import React from 'react';
import './Filter.scss';

const Filter = () => {
  return (

    <div className="filter">
      <form className="form__input">
        <input type="search" name="search" id="search" placeholder="Search for a country"/>
      </form>

      <div className='filter__regions'>
        <select name="select" id="select" className='select'>
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      
    </div>
    
  )
}

export default Filter



{/* <i class="fa-solid fa-magnifying-glass"></i> 
<i class="fa-solid fa-angle-down"></i> */}
