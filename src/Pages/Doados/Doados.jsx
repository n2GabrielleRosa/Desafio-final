import S from './doados.module.scss'
import livroDoado from '../../assets/livroDoado.png'


export default function Doados(){
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
            </section>

        </section>
    )
}