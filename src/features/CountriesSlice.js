import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAsyncCountries = createAsyncThunk('countries/fetchAyncCountries', async() => {
  const countriesData = await axios.get('https://restcountries.com/v3.1/all');
  return countriesData.data;
})

export const fetchAsyncCountriesDetail = createAsyncThunk('countries/fetchAyncCountriesDetail', async(name) => {
  const countryData = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return countryData.data;
})

const initialState = {
  countries: [],
}

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCountries.fulfilled]: (state, {payload}) => {
      console.log('Fulfilled');
      return {...state, countries:payload}
    }
  }
})

export default countriesSlice.reducer;
export const getAllCountries = (state) => state.countries.countries;
