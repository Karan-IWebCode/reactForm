import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from '../src/Components/Field/Field'
import Header from '../src/Components/Header/Header'
import Footer from './Components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
     <Field />
     <Footer />
    </div>
  );
}

export default App;
