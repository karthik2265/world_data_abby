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
  filteredCountries: [],
  selectedCountry: [],
  searchTerm: "",
  selectedRegion: "",
}

// utility functions

// this function returns filtered countries based on searchTerm and selectedRegion
function filterCountries(countries, searchTerm, selectedRegion) {
  searchTerm = searchTerm.toLowerCase()
  selectedRegion = selectedRegion.toLowerCase()
  const filteredCountries = countries.map(country => {
    // get name and region of the country in lowe case 
    const name = country.name.common.toLowerCase()
    const region = country.region.toLowerCase()
    // check if this country should be shown or filtered-out
    // in this case we dont need to filter
    if (searchTerm === "" && selectedRegion === "Filter by region") return true
    // in this case we only filter by region
    if (searchTerm === "") {
      return region.includes(selectedRegion)
    }
    // in this case we only filter by searchTerm
    if (selectedRegion === "Filter by region") {
      return name.includes(searchTerm)
    }
    // in this case we filter by both
    return name.includes(searchTerm) && region.includes(selectedRegion)
  })
  return filteredCountries
}

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    updateSearchTerm: (state, { newSearchTerm }) => {
      state.searchTerm = newSearchTerm
      const allCountries = state.countries
      const region = state.selectedRegion
      state.filteredCountries = filterCountries(allCountries, newSearchTerm, region)
    },
    updateSelectedRegion: (state, { newSelectedRegion }) => {
      state.selectedRegion = newSelectedRegion;
      const allCountries = state.countries;
      const searchTerm = state.searchTerm;
      state.filteredCountries = filterCountries(allCountries, searchTerm, newSelectedRegion)
    }
  },
  extraReducers: {
    [fetchAsyncCountries.fulfilled]: (state, {payload}) => {
      console.log('Fulfilled');
      return {...state, countries:payload, filteredCountries: payload}
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