export default function Certificados() {

    const cursos = [
        {
            "id": 1,
            "nomeCurso": "React comece seu projeto full stack",
            "data": "27/12/2023 a 08/03/2024",
            "horasTotais": ' - 12 horas '
        },
        {
            "id": 2,
            "nomeCurso": "Node.js: continue seu projeto full stack criando uma API com Express",
            "data": "08/03/2024 a 09/03/2024",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 3,
            "nomeCurso": "React e Node.js: consumindo APIs no React no projeto full stack",
            "data": "09/03/2024 a 10/03/2024",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 4,
            "nomeCurso": "Node.js: criando uma API Rest com Express e MongoDB",
            "data": "07/02/2024 a 09/02/2024",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 5,
            "nomeCurso": "ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite",
            "data": "18/04/2024 a 06/05/2024",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 6,
            "nomeCurso": "Git e GitHub: compartilhando e colaborando em projetos",
            "data": "04/04/2024 a 06/04/2024",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 7,
            "nomeCurso": "SQL com MySQL: manipule e consulte dados",
            "data": "14/04/2024",
            "horasTotais": ' - 12 horas '
        },
        {
            "id": 8,
            "nomeCurso": "Consultas SQL: avançando no SQL com MySQL",
            "data": "15/04/2024 a 18/04/2024",
            "horasTotais": ' - 14 horas '
        },
        {
            "id": 9,
            "nomeCurso": "HTTP: entendendo a web por baixo dos panos",
            "data": "06/02/2024 a 07/02/2024",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 10,
            "nomeCurso": "JavaScript manipulando elementos no DOM",
            "data": "27/11/2023 a 28/11/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 11,
            "nomeCurso": "Pontos fortes parte 1: descubra os seus e aprenda a gerenciá-los",
            "data": "27/11/2023",
            "horasTotais": ' - 4 horas '
        },
        {
            "id": 12,
            "nomeCurso": "Gestão de produtos digitais: Produto vs. Projeto",
            "data": "29/11/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 13,
            "nomeCurso": "Startupismo: comece do jeito certo",
            "data": "28/11/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 14,
            "nomeCurso": "Comunicação: como se expressar bem e ser compreendido",
            "data": "02/12/2023",
            "horasTotais": ' - 12 horas '
        },
        {
            "id": 15,
            "nomeCurso": "Oratória: conquiste a atenção do seu público",
            "data": "02/12/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 16,
            "nomeCurso": "React desenvolvendo em React Router com JavaScript",
            "data": "16/05/2023 a 17/05/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 17,
            "nomeCurso": "React com JavaScript lidando com arquivos estáticos",
            "data": "15/05/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 18,
            "nomeCurso": "React como os componentes funcionam",
            "data": "11/05/2023 a 12/05/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 19,
            "nomeCurso": "React desenvolvendo com JavaScript",
            "data": "04/05/2023 a 08/05/2023",
            "horasTotais": ' - 14 horas '
        },
        {
            "id": 20,
            "nomeCurso": "JavaScript na Web: armazenando dados no navegador",
            "data": "07/06/2023 a 09/06/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 21,
            "nomeCurso": "JavaScript manipulando o DOM",
            "data": "06/06/2023 a 07/06/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 22,
            "nomeCurso": "JavaScript para Web: Crie páginas dinâmicas",
            "data": "28/06/2022 a 05/06/2023",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 23,
            "nomeCurso": "JavaScript I: algoritmos de ordenação",
            "data": "01/02/2023 a 07/02/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 24,
            "nomeCurso": "Algoritmos com JavaScript II: aprofundando em algoritmos de ordenação e busca",
            "data": "07/02/2023 a 29/05/2023",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 25,
            "nomeCurso": "Produtividade parte 2: organização e prioridade",
            "data": "01/05/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 26,
            "nomeCurso": "JavaScript objetos",
            "data": "26/12/2022 a 01/02/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 27,
            "nomeCurso": "JavaScript programação orientada a objetos",
            "data": "11/10/2022 a 01/02/2023",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 28,
            "nomeCurso": "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
            "data": "05/12/2022 a 06/12/2022",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 29,
            "nomeCurso": "Lógica de programação: laços e listas com JavaScript",
            "data": "06/12/2022 a 07/12/2022",
            "horasTotais": ' - 4 horas '
        },
        {
            "id": 30,
            "nomeCurso": "JavaScript tipos, variáveis e funções",
            "data": "26/07/2022 a 29/07/2022",
            "horasTotais": ' - 12 horas '
        },
        {
            "id": 31,
            "nomeCurso": "JavaScript Arrays",
            "data": "01/08/2022 a 16/08/2022",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 32,
            "nomeCurso": "JavaScript objetos",
            "data": "18/08/2022 a 04/10/2022",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 33,
            "nomeCurso": "React desenvolvendo com JavaScript",
            "data": "04/05/2023 a 08/05/2023",
            "horasTotais": ' - 14 horas '
        },
        {
            "id": 34,
            "nomeCurso": "React como os componentes funcionam",
            "data": "11/05/2023 a 12/05/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 35,
            "nomeCurso": "React desenvolvendo em React Router com JavaScript",
            "data": "16/05/2023 a 17/05/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 36,
            "nomeCurso": "React com JavaScript lidando com arquivos estáticos",
            "data": "15/05/2023",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 37,
            "nomeCurso": "CSS: Flexbox e layouts responsivos",
            "data": "10/12/2022",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 38,
            "nomeCurso": "CSS: construindo layouts com Grid",
            "data": "08/12/2022",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 39,
            "nomeCurso": "Praticando CSS: Grid e Flexbox",
            "data": "10/12/2022 a 11/12/2022",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 40,
            "nomeCurso": "Flexbox: posicione elementos na tela",
            "data": "11/07/2022 a 12/07/2022",
            "horasTotais": ' - 9 horas '
        },
        {
            "id": 41,
            "nomeCurso": "CSS Grid: simplificando layouts",
            "data": "11/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 42,
            "nomeCurso": "Arquitetura CSS: descomplicando os problemas",
            "data": "12/07/2022 a 13/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 43,
            "nomeCurso": "Vetores e Animação com SVG: trabalhando com CSS e JavaScript",
            "data": "15/07/2022 a 18/07/2022",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 44,
            "nomeCurso": "Layouts Responsivos: trabalhando com layouts mobile",
            "data": "20/07/2022 a 21/07/2022",
            "horasTotais": ' - 7 horas '
        },
        {
            "id": 45,
            "nomeCurso": "Guia de estilos: montando páginas com componentes",
            "data": "13/07/2022 a 14/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 46,
            "nomeCurso": "Produtividade parte 1: estratégias para o dia a dia",
            "data": "27/12/2022 a 17/02/2023",
            "horasTotais": ' - 6 horas '
        },
        {
            "id": 47,
            "nomeCurso": "Foco: trazendo mais resultados para o dia a dia",
            "data": "25/12/2022 a 27/12/2022",
            "horasTotais": ' - 10 horas '
        },
        {
            "id": 48,
            "nomeCurso": "Produtividade: hábitos e práticas para o dia a dia",
            "data": "16/11/2022 a 20/12/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 49,
            "nomeCurso": "Hábitos: da produtividade às metas pessoais",
            "data": "08/07/2022 a 14/11/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 50,
            "nomeCurso": "Aprender a aprender: técnicas para seu autodesenvolvimento",
            "data": "26/06/2022 a 07/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 51,
            "nomeCurso": "HTML5 e CSS3 parte 1: crie uma página da Web",
            "data": "25/06/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 52,
            "nomeCurso": "HTML5 e CSS3 parte 2: posicionamento, listas e navegação",
            "data": "25/06/2022 a 26/06/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 53,
            "nomeCurso": "HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas",
            "data": "27/06/2022 a 29/06/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 54,
            "nomeCurso": "HTML5 e CSS3 parte 4: avançando no CSS",
            "data": "29/06/2022 a 01/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 55,
            "nomeCurso": "CSS: dispondo elementos com Flexbox e Grid",
            "data": "10/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 56,
            "nomeCurso": "HTML e CSS: praticando HTML/CSS",
            "data": "08/07/2022 a 10/07/2022",
            "horasTotais": ' - 8 horas '
        },
        {
            "id": 57,
            "nomeCurso": "HTML e CSS: responsividade com mobile-first",
            "data": "18/07/2022 a 20/07/2022",
            "horasTotais": ' - 12 horas '
        }
    ]

    return (
        <section id="certificados">
            <h3 style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--titulo)', fontFamily: 'Roboto', marginBottom: '20px' }}># Certificados</h3>
            <div className="certificados-flex">
                {
                    cursos.map(curso => (
                        <div key={curso.id} className="certificado">
                            <h4>{curso.nomeCurso}</h4>

                            <div className="horas">
                                {curso.data}
                                {curso.horasTotais}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}