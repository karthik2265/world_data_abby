import React, { useRef } from 'react';
import './Filter.scss';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../../features/CountriesSlice'


const Filter = () => {

  const dispatch = useDispatch()

  const inputRef = useRef(null)
  const selectRef = useRef(null)

  // handlers
  function inputCHnageHandler() {
    const newSearchTerm = inputRef.current.value
    console.log('Input change handler is triggered with ', newSearchTerm, 'isNull = ', newSearchTerm == null, 'isEmpty = ', newSearchTerm == "")
    dispatch(countriesActions.updateSearchTerm(newSearchTerm))
  }

  function selectCHangeHandler() {
    const newSelectedRegion = selectRef.current.value
    dispatch(countriesActions.updateSelectedRegion(newSelectedRegion))
  }
  
  return (

    <div className="filter">
      <form className="form__input">
        <input type="search" name="search" id="search" placeholder="Search for a country" ref={inputRef} onChange={inputCHnageHandler}/>
      </form>

      <div className='filter__regions'>
        <select name="select" id="select" className='select' ref={selectRef} onChange={selectCHangeHandler}>
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
