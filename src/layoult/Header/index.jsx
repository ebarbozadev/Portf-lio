import { useState } from "react";

export default function Home() {
    const [ativado, setAtivado] = useState(false);

    

    function desativarNavegacao() {
        const navegacaoCelular = document.getElementById('navegacao-celular');
        setAtivado(false);
        navegacaoCelular.style.display = 'none';
    }

    function mostrarNavegacao() {
        const navegacaoCelular = document.getElementById('navegacao-celular');
        if (ativado) {
            setAtivado(false);
            navegacaoCelular.style.display = 'none';
        } else {
            setAtivado(true);
            navegacaoCelular.style.display = 'block';
        }
    }

    return (
        <header>
            <nav>
                <div className="titulo">
                    <h1>ebarbozadev</h1>
                </div>

                <div className="navegacao">
                    <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#tecnologias">Tecnologias</a></li>
                        <li><a href="#carreira">Carreira</a></li>
                        <li><a href="#certificados">Certificados</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div style={{ textAlign: 'left' }} className="hamburguer" onClick={() => mostrarNavegacao()}>
                    <i onClick={() => mostrarNavegacao()} class="fa-solid fa-bars"></i>
                </div>

                <div id="navegacao-celular">
                    <ul>
                        <li onClick={() => desativarNavegacao()}><a href="#sobre">Sobre</a></li>
                        <li onClick={() => desativarNavegacao()}><a href="#projetos">Projetos</a></li>
                        <li onClick={() => desativarNavegacao()}><a href="#tecnologias">Tecnologias</a></li>
                        <li onClick={() => desativarNavegacao()}><a href="#carreira">Carreira</a></li>
                        <li onClick={() => desativarNavegacao()}><a href="#certificados">Certificados</a></li>
                        <li onClick={() => desativarNavegacao()}><a href="#contato">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}