import { createContext, useEffect, useState} from 'react'
import axios from 'axios'

//Voy a crear el context con la vairable NoticiasContext
const NoticiasContext = createContext()

const NoticasProvider = ({children}) => {

    const [ categoria, setCategoria ] = useState('general');
    const [ noticias, setNoticias ] = useState({})
    const [ pagina, setPagina ] = useState(1)
    const [ totalNoticias, setTotalNoticias ] = useState(0)

    //Este primer effect es para consultar por categoria
    useEffect(() => {
     const consultarAPI = async () =>{
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`

        const {data } = await axios(url)
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults)
        setPagina(1)
     }
     consultarAPI()
    }, [categoria])

    //Este Segundo effect es para cambiar la pagina por el paginador y la api
    useEffect(() => {
        const consultarAPI = async () =>{
           const apiKey = import.meta.env.VITE_API_KEY;
           const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${apiKey}`
   
           const {data } = await axios(url)
           setNoticias(data.articles);
           setTotalNoticias(data.totalResults)
        }
        consultarAPI()
       }, [pagina])
    

    const handleChangeCategoria = e => {
        setCategoria( e.target.value )

    }

    const handleChangePagina = (e, valor) =>{
        setPagina(valor);
    }

    return(
        <NoticiasContext.Provider
            value={{
                categoria,
                noticias,
                handleChangeCategoria,
                pagina,
                totalNoticias,
                handleChangePagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

//En el Eexport va el PROVIDER
export{
    NoticasProvider
}

//En el export Default se colca es el CONTEXT 
export default NoticiasContext