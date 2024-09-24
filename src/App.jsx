import { useState } from 'react'
import './App.css'
import Appgrid from './Appgrid.jsx'

import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid2 from '@mui/material/Grid2'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1)
  }


  return (
    <Stack direction={{ xs: 'column', sm: 'row' , md: 'column'}}
    spacing={{ xs: 1, sm: 5, md: 4 }}>
    {/** spacing: espaciado entre componentes */}
      {/*<h1>Soy un mono y vivo de chill</h1>
      <img className='avatar' src='./src/Pigmy_Monkey.jpg' alt='imagen'/>
      
      <button onClick={handleClick}>
        Me acariciaste {count} veces
      </button>
      <br/>
      <br/>
      <Button variant='text' size='large' onClick={handleClick}>
        Me acariciaste {count} veces (TEXT - LARGE)
      </Button>
      <br/>
      <br/>
      <Button variant='contained' size='medium' onClick={handleClick}>
        Me acariciaste {count} veces (CONTAINED - MEDIUM)
      </Button>
      <br/>
      <br/>
      <Button variant='outlined' size='small' onClick={handleClick}>
        Me acariciaste {count} veces (OUTLINED - SMALL)
      </Button>


      <br/>
      <br/>
      <Button variant='contained' color='secondary'>
        (CONTAINED - SECONDARY)
      </Button>
      <br/>
      <br/>
      <Button variant='contained' color='success'>
        (CONTAINED - SUCCESS)
      </Button>
      <br/>
      <br/>
      <Button variant='contained' color='ERROR'>
        (CONTAINED - ERROR)
      </Button>


      <br/>
      <br/>
      <Button variant='contained' sx={{color:'lightblue', backgroundColor:'darkblue'}}>
        (CONTAINED - SX LIGHTBLUE DARKBLUE)
      </Button>
      <br/>
      <br/>
      <Button disabled variant='contained' sx={{color:'lightblue', backgroundColor:'darkblue'}}>
      (CONTAINED - SX LIGHTBLUE DARKBLUE - DISABLED)
      </Button>

      <br/>
      <br/>
      <Avatar sx={{width:150, height:150}} src='./src/Pigmy_Monkey.jpg' alt='imagen' />
      <Typography variant='h3'>Soy un mono y vivo de chill</Typography>
*/}

      <Appgrid/>






    </Stack>
  )
}

export default App
