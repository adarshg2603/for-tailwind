import { useState } from 'react'
import './app.css'
import Card from './components/Card'  
function App() {
  return (
    <>
    <Card userName='Anjali' btntext={"Learn More"}/>
    <Card userName="adarsh" btntext={"Read More"}/>
    </>
  );
}

export default App
