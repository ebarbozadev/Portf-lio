import { useState } from "react";
import Video from "../Video";

export default function Projetos() {
    const [mvEstoque, setMvEstoque] = useState(false);
    const [cadProduto, setCadProduto] = useState(false);

    function video(e) {
        const id = e.target.id;

        if (id === 'cadProduto') {
            setCadProduto(true);
            setMvEstoque(false);
        } else if (id === 'mvEstoque') {
            setCadProduto(false);
            setMvEstoque(true);
        }
    }

    function fecharVideo() {
        setCadProduto(false);
        setMvEstoque(false);
    }

    return (
        <section>
            <section id='projetos' className='projeto'>
                <h3># Projetos</h3>
                <div className='projetos'>
                    <div className="projeto-card">
                        <h4>Cadastro de Produto</h4>

                        <p>
                            Poderá cadastrar seus produtos visualizando o estoque atual, e também ter controle sobre o custo de venda e custo de venda.
                        </p>

                        <div className="tecnologias">
                            <p className="linguagem">JavaScript</p>
                            <p className="linguagem">NodeJS</p>
                            <p className="linguagem">ReactJS</p>
                        </div>

                        <div className="card-botao">
                            <button onClick={() => alert('Entre em contato')}>Código</button>
                            <button id="cadProduto" onClick={(e) => video(e)}>Vídeo</button>
                        </div>
                    </div>

                    <div className="projeto-card">
                        <h4>Movimento de Estoque</h4>

                        <p>
                            Tenha total controle sobre seu estoque ficando livre para dar entrada ou saída de estoque.
                        </p>

                        <div className="tecnologias">
                            <p className="linguagem">JavaScript</p>
                            <p className="linguagem">NodeJS</p>
                            <p className="linguagem">ReactJS</p>
                        </div>

                        <div className="card-botao">
                            <button onClick={() => alert('Entre em contato')}>Código</button>
                            <button id="mvEstoque" onClick={(e) => video(e)}>Vídeo</button>
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

                    <Video aberto={cadProduto} fechar={fecharVideo} link={'https://www.youtube.com/embed/B3vot3THdMQ?si=Ds-C3_0km_pJKQR5'} />
                    <Video aberto={mvEstoque} fechar={fecharVideo} link={'https://www.youtube.com/embed/tV0RuFm_l44?si=ugqkLGR88WS-Q-zJ'} />
                </div>
            </section>
        </section>
    );
}
