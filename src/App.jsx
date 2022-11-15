import { Container, Grid, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import ListdoNoticias from './components/ListdoNoticias'
import { NoticasProvider } from './context/NoticasProvider'



function App() {

  return (
    <NoticasProvider>
    <Container>
      <header>
        <Typography aling='center' marginY={5} component='h1' variant='h3' >
          Buscador de Noticias
        </Typography>
      </header>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={4}>
          <Formulario />
        </Grid>
      </Grid>

      <ListdoNoticias>
        
      </ListdoNoticias>

    </Container>
    </NoticasProvider>
  )
}

export default App
