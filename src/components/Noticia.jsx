import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link  from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Noticia = ({ noticia }) => {

  const { urlToImage, url, title, description, source } = noticia

  return (
    <Grid item md={6} lg={4}>
      <Card>
        { urlToImage && (
          <CardMedia 
            component= "img"
            alt={ `Imagen de la noticia ${title}` }
            image={ urlToImage }
            height={'250'}
          />
        )}

        <CardContent>
          <Typography variant="body1" color='error' >
            {source.name}
          </Typography>  
          <Typography variant="h5" color='div' >
            {title}
          </Typography>  
          <Typography variant="body2" >
            {description}
          </Typography> 
        </CardContent> 

        <CardActions>
          <Link
            href={url}
            target='_blank'
            variant= "contained"
            color='secondary'
            width={'100%'}
            padding={2}
            textAlign={'center'}
            underline="none"
            fontWeight={700}
          >
            Leer Noticia
          </Link>
        </CardActions> 
      </Card>
    </Grid>

  )
}

export default Noticia