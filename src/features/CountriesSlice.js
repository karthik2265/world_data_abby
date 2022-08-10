import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAsyncCountries = createAsyncThunk('countries/fetchAyncCountries', async() => {
  const countriesData = await axios.get('https://restcountries.com/v3.1/all');
  return countriesData.data;
})

export const fetchAsyncCountryDetail = createAsyncThunk('countries/fetchAyncCountryDetail', async(name) => {
  const countryData = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return countryData.data;
})

const initialState = {
  countries: [],
  selectedCountry: []
}

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCountries.fulfilled]: (state, {payload}) => {
      console.log('Fulfilled');
      return {...state, countries:payload}
    },
    [fetchAsyncCountryDetail.fulfilled]: (state, {payload}) => {
      console.log('Fulfilled');
      return {...state, selectedCountry:payload}
    }
  }
})

export default countriesSlice.reducer;
export const getAllCountries = (state) => state.countries.countries;
export const getSelectedCountry = (state) => state.countries.selectedCountry;