import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Country from './components/Country/Country';

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={[<Filter />,<Countries />]} />
        <Route path='/countries/:name' element={<Country />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App