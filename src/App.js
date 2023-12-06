import React from 'react';
import './App.css';
import Header from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "yellow";

  return (
    <>
      <Header color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
