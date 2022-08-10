import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountryDetail, getSelectedCountry } from '../../features/CountriesSlice';

const Country = () => {

  const { name } = useParams();
  const dispatch = useDispatch();

  const countryData = useSelector(getSelectedCountry);
  console.log(countryData)

  useEffect(() => {
    dispatch(fetchAsyncCountryDetail(name))
  }, [dispatch, name])

  return (
    <div>
      
    </div>
  )
}

export default Country