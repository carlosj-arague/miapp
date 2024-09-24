import { useState } from 'react'
import './App.css'

import Button from '@mui/material/Button'


import Grid from '@mui/material/Grid2'

function Appgrid() {
  const [count, setCount] = useState(0)



  return (
    <Grid container spacing={2}>
        <Grid size={{xs:12, sm:6, md:4}}>
            <Button variant='contained' fullWidth >
                4
            </Button>
        </Grid>
        <Grid size={{xs:12, sm:6, md:4}}>
            <Button variant='contained' fullWidth>
                2
            </Button>
        </Grid>
        <Grid size={{xs:12, sm:6, md:4}}>
            <Button variant='contained' fullWidth>
                5
            </Button>
        </Grid>
    </Grid>
  )
}

export default Appgrid
