
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

//State Creation
const [principle,setPrinciple]=useState(0);
const [year,setYear]=useState(0);
const [rate,setRate]=useState(0);
const [interest,setInterest]=useState(0);
console.log(principle);
console.log(rate);
console.log(year);

const handleCalculate=(e)=>{
  let output=(principle*year*rate)/100;
  console.log(output);
  setInterest(output);
}

function reset(){
  setPrinciple(0)
  setInterest(0);
  setRate(0);
  setYear(0)
}



  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="head">
            <h1>Simple Interest Calculator</h1>
            <p>The rate at which you borrow or lend money is called the simple interest. If a borrower takes money from a lender, an extra amount of money is paid back to the lender. The borrowed money which is given for a specific period is called the principal. <br /> The extra amount which is paid back to the lender for using the money is called the interest.</p>
          </div>
          <div className="card">
            <h3 className='symbol'>&#8377; {interest}</h3>
            <p>Your Total Simple Interest</p>
          </div>
          <div className='input'><br />
          <TextField id="outlined-basic" label="Principle Amount" variant="outlined" onChange={e=>setPrinciple(e.target.value)} value={principle} /> <br />
          <TextField id="outlined-basic" label="Rate Of Interest" variant="outlined" onChange={e=>setRate(e.target.value)} value={rate} /> <br />
          <TextField id="outlined-basic" label="Year" variant="outlined" onChange={e=>setYear(e.target.value)} value={year} /> <br />
          <Button onClick={handleCalculate} variant="contained">Calculate</Button> <br />
          <Button onClick={reset} variant="outlined">Reset</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
