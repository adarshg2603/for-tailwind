import { useState } from 'react'
import './app.css'
import Card from './components/Card'  
function App() {
  return (
    <>
    <Card userName='Alok' btntext={"Learn More"}/>
    <Card userName='Adarsh' btntext={"React Here"} />
    </>
  );
}

export default App
