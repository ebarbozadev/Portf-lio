import imagemTrabalho from '../../assets/fotoTrabalho.jpg';

export default function Sobre() {
    return (
        <section>
            <section id='sobre' className='sobre'>
                <h3># Sobre</h3>
                <div className='sobre-apresentacao'>
                    <img src={imagemTrabalho} alt="Foto do trabalho" />

                    <div className="sobreMim">
                        <p>Desde pequeno tendo contato com a tecnologia carrego desde os <b>18 ANOS</b> o <b>SONHO</b> de ser um <b>DESENVOLVEDOR</b>!</p>

                        <p>Com uma crescente vontade de realizar meu <b>SONHO</b> estudo duramente hà <b>3 ANOS</b> as tecnologias do mercado e me <b>ESPECIALIZO</b> em <b>REACT.JS</b> para fazer a componentização do <b>FRONT-END</b> e <b>NODE.JS</b> para executar o meu <b>BACK-END</b>, assim também utilizando as <b>MAIORES BIBLIOTECAS</b> das tais tecnologias possuindo mais de <b>70 CERTIFICADOS</b> no âmbito da tecnologia.</p>

                        <p>Também tive contato com <b>PASCAL</b>, <b>DELPHI</b>, <b>FIREBIRD</b> que obtive para auxiliar no <b>DESENVOLVIMENTO DO SOFTWARE</b> Gerence Sistemas, além também de <b>.NET</b>, <b>C#</b> e <b>PHP</b>.</p>

                        <p>Possuo grande <b>FACILIDADE</b> em <b>APRENDER RAPIDAMENTE</b> e me <b>ADAPTAR</b> a novos ambientes e principalmente <b>TRABALHAR EM EQUIPE</b> visando um <b>RESULTADO EXCELENTE</b>.</p>
                    </div>

                    <div className="sobreExperiencia">
                        <div className="sobreExperiencia-card">
                            <i class="fa-solid fa-code"></i>
                            <p>6 meses como</p>
                            <h4>Desenvolvedor</h4>
                        </div>

                        <div className="sobreExperiencia-card">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p>2.5 anos como</p>
                            <h4>Estudante</h4>
                        </div>

                        <div className="sobreExperiencia-card">
                            <i class="fa-solid fa-book"></i>
                            <p>3 anos de</p>
                            <h4>Aprendizado</h4>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}