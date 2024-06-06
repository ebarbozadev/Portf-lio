import fotoEmanuel from '../../assets/imagem-emanuel.png';

export default function Apresentacao() {
    function mostrarGmail() {
        alert('e.barboza@edu.unipar.br');
    }

    return (
        <section className="apresentacao">
            <div className="apresentacaoEsquerdo">
                <img src={fotoEmanuel} alt="Imagem do criador do site, Emanuel Barboza" />
            </div>

            <div className="apresentacaoDireito">
                <h3>Desenvolvedor Full-Stack</h3>
                <h2 className="titulo">ebarboza dev</h2>
                <div className="apresentacaoDireito-redesSociais">
                    <div>
                        <a href="https://github.com/ebarbozadev" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-square-github redesSociais-GitHub"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/ebarbozadev/" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-linkedin redesSociais-Linkedin"></i>
                        </a>

                        <a href="https://api.whatsapp.com/send/?phone=%2B5544999756602" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-square-whatsapp redesSociais-Whatsapp"></i>
                        </a>

                        <p onClick={() => mostrarGmail()} className='redesSociais-Gmail'>
                            <i class="fa-solid fa-envelope redesSociais-Gmail"></i>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}