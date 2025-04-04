import S from './doados.module.scss'
import livroDoado from '../../assets/livroDoado.png'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () =>{
        const response = await axios.get("https://api-de-livros-lnvi.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros()
    },[])



    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>

            <section className={S.boxcard}>
                <article>
                    <img src={livroDoado} alt="imagem de um livro que se chama o protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                {livros.map((item)=>(
                    <article>
                        <img src={item.imagem_url} alt="capa do livro ${item.titulo}" />
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>
                ))}

            </section>

        </section>
    )
}