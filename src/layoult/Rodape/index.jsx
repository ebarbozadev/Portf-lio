export default function Rodape() {
    function mostrarGmail() {
        alert('e.barboza@edu.unipar.br');
    }

    return (
        <footer className="rodape">
            <div className="rodape-flex">
                <div>
                    <p>Copyright © 2024 Emanuel Barboza</p>
                </div>

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

                    <span onClick={() => mostrarGmail()} className='redesSociais-Gmail'>
                        <i class="fa-solid fa-envelope redesSociais-Gmail"></i>
                    </span>
                </div>
            </div>
        </footer>
    )
}