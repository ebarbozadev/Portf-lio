import trabalhoPrefeitura from '../../assets/trabalhoPrefeitura.jpg';
import trabalhoTigrara from '../../assets/trabalhoTigrara.png';
import trabalhoGerence from '../../assets/fotoTrabalho.jpg';
import trabalhoMais from '../../assets/trabalhoMaisGerencia.png';


export default function Carreira() {

    const cargos = [
        {
            id: 0,
            imagem: trabalhoPrefeitura,
            cargo: 'Estagiário',
            local: 'Prefeitura Municipal de Cianorte',
            descricao: 'Responsável pela parte de protocólos dos lotes.',
            meses: 2,
            tempo: 'Julho de 2022 - Agosto de 2022'
        },

        {
            id: 1,
            imagem: trabalhoTigrara,
            cargo: 'Auxiliar de T.I.',
            local: 'Tigrara',
            descricao: 'Responsável pelo T.I., cuidando dos computadores, redes, wi-fi, câmeras e servidores.',
            meses: 10,
            tempo: 'Setembro de 2022 - Junho de 2023'
        },

        {
            id: 2,
            imagem: trabalhoGerence,
            cargo: 'Estagiário de Desenvolvimento',
            local: 'Gerence Sistemas',
            descricao: 'Responsável pelo desenvolvimento de um novo software utilizando Delphi (+ bibliotecas), Pascal e FireMonkey.',
            meses: 6,
            tempo: 'Junho de 2023 - Novembro de 2023'
        },

        {
            id: 3,
            imagem: trabalhoMais,
            cargo: 'Estagiário de Vendas',
            local: 'Mais Gerência',
            descricao: 'Responsável pelas vendas, pós vendas e pelo suporte técnico.',
            meses: 2,
            tempo: 'Novembro de 2023 - Fevereiro de 2024'
        },
    ];

    function mudaImagem(imagem) {
        const img = document.getElementById('imagemMostrada');
        img.src = imagem;
    }

    return (
        <section id="carreira">
            <h3 style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--titulo)', fontFamily: 'Roboto', marginBottom: '20px' }}># Carreira</h3>
            <div className="carreiras-flex">
                <div className="carreiras">
                    {
                        cargos.map(cargo => (
                            <div onClick={() => mudaImagem(cargo.imagem)} key={cargo.id} className="cargo">
                                <div style={{ fontFamily: "Roboto" }} className="cabecalho">
                                    <h4>{cargo.cargo}</h4>
                                    <p>{cargo.local}</p>
                                </div>

                                <p style={{ fontFamily: "Merriweather", textAlign: 'justify' }}>{cargo.descricao}</p>

                                <div style={{ fontFamily: "Merriweather" }} className="tempo">
                                    <p>{cargo.meses} meses</p>
                                    <p>{cargo.tempo}</p>
                                </div>

                                <div className='botao'>
                                    <button>Visualizar</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="imagemControle">
                    <img id="imagemMostrada" src={trabalhoPrefeitura} alt='Local onde trabalhei' />
                </div>
            </div>
        </section >
    )
}