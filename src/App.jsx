import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [pamount,setPamount]=useState(0);
  const [rate,setRate]=useState(0);
  const [time,setTime]=useState(0);
  const [result,setResult]=useState(0)
  const [validp,setValidp]=useState(true)
  const [validr,setValidr]=useState(true)
  const [validt,setValidt]=useState(true)
  function submit(e){
    e.preventDefault();
    let res=(parseInt(pamount)*parseInt(rate)*parseInt(time))/100;
    setResult(res)
  }
  function reset()
  {
    setPamount(0);
    setValidp(true)
    setRate(0);
    setValidr(true)
    setTime(0);
    setValidt(true);
    setResult(0)
  }
 function validInput(e)
 {
   const {name,value}=e.target;
  if(value.match(/^[0-9]*.?\d+$/g) && parseInt(value)>=0)
  {
    switch (name){
      case 'pamount':setPamount(value);
                     setValidp(true);
                     break;
      case  'time':setTime(value);
                   setValidt(true);
                   break;
      case  'rate':setRate(value);
                   setValidr(true)
                   break;
      default : console.log("enter any valid");
                break;
     }
  }else{
    switch (name){
      case 'pamount':setPamount();
                     setValidp(false)
                     break;
      case  'time':setTime();
                   setValidt(false);
                   break;
      case  'rate':setRate();
                   setValidr(false)
                   break;
      default : console.log("enter any valid");
                break;
     }
  }
  }
  return (
    <>
      <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='bg-light w-50 shadow rounded p-5'>
          <h4 className='text-center'>Simple Interest Calculator</h4>
          <div className='d-flex justify-content-center p-5 border  mt-3' style={{ background: 'palegreen' }}>
            {result} ₹
          </div>
          <form onSubmit={submit}>
            <div className='mt-3'>
              <TextField id="outlined-basic" value={pamount} name='pamount' onChange={validInput} className='w-100' label="₹ Principle amount" variant="outlined"/>
              {
                !validp && <div className='text-danger'>Invalid Principle amount</div>
              }
            </div>
            <div className='mt-3'>
              <TextField id="outlined-basic" value={rate}  name='rate' onChange={validInput} className='w-100' label="% Rate" variant="outlined" />
              {
                !validr && <div className='text-danger'>Invalid  rate</div>
              }
            </div>
            <div className='mt-3'>
              <TextField id="outlined-basic" value={time} name='time' onChange={validInput} className='w-100' label="Time" variant="outlined" />
              {
                !validt && <div className='text-danger'>Invalid time</div>
              }
            </div>
            <Stack className='mt-3' style={{height:'50px'}} spacing={2} direction="row">
              <Button variant="contained" type='submit' disabled={validp&&validr&&validt?false:true} className='w-50 bg-dark'>Submit</Button>
              <Button variant="contained" onClick={reset} className='w-50 bg-info'>reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
