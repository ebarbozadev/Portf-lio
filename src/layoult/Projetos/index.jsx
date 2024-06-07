import { useState } from "react";
import Video from "../Video";

export default function Projetos() {

    const [aberto, setAberto] = useState(false);

    function video() {
        setAberto(!aberto);
    }

    return (
        <section>
            <section id='projetos' className='projeto'>
                <h3># Projetos</h3>
                <div className='projetos'>
                    <div className="projeto-card">
                        <h4>Cadastro de Produto</h4>

                        <p>
                            Poderá cadastrar seus produtos visualizando o estoque atual, e também ter controle sobre o custo de venda e custo de venda
                        </p>

                        <div className="tecnologias">
                            <p className="linguagem">JavaScript</p>
                            <p className="linguagem">NodeJS</p>
                            <p className="linguagem">ReactJS</p>
                        </div>

                        <div className="card-botao">
                            <button onClick={() => alert('Entre em contato')}>Código</button>
                            <button onClick={() => video()}>Vídeo</button>
                        </div>
                    </div>

                    <div className="projeto-card">
                        <h4>Em breve...</h4>
                    </div>

                    <div className="projeto-card">
                        <h4>Em breve...</h4>
                    </div>

                    <div className="projeto-card">
                        <h4>Em breve...</h4>
                    </div>

                    <div className="projeto-card">
                        <h4>Em breve...</h4>
                    </div>

                    <Video aberto={aberto} fechar={() => video()} link={'https://www.youtube.com/embed/B3vot3THdMQ?si=Ds-C3_0km_pJKQR5'} />
                </div>
            </section>
        </section>
    )
}