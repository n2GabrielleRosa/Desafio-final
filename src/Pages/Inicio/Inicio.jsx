import S from "./inicio.module.scss"
import comunidade from '../../assets/comunidade.png'
import leitura from '../../assets/leitura.png'
import conhecimento from '../../assets/conhecimento.png'
import balance from '../../assets/balance.png'


export default function inicio(){
    return(
        <section>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

        <section className={S.devoDoar}>
            <div>
                <h2>Por que devo Doar?</h2>
            </div>

            <section className={S.boxCard}>
                <article>
                <img src={comunidade} alt="" />
                <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>

                <article>
                <img src={leitura} alt="" />
                <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>

                <article>
                <img src={conhecimento} alt="" />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article>

                <article>
                <img src={balance} alt="" />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </section>

        </section>

        </section>
        
    )
}