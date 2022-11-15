import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListdoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20 )

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant={'h3'}
                component={'h2'}
            >
                Últimas Noticas
            </Typography>

            <Grid container spacing={2}>
                {noticias.length > 0 ?
                    noticias.map(noticia => (
                        <Noticia
                            key={noticia.url}
                            noticia={noticia}
                        />
                    ))
                    : <p> Debe seleccionar una categoria </p>

                }
            </Grid>

            <Stack 
                spacing={2}
                direction={'row'}
                justifyContent= 'center'
                alignItems='center'
                sx={{
                    marginY: 5
                }}
            >
                <Pagination 
                    count={totalPaginas} 
                    color="secondary" 
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
    )
}

export default ListdoNoticias