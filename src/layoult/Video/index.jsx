export default function Video({ link, fechar, aberto }) {
    if (aberto) {
        return (
            <section className="video">
                <div className="container">
                    <iframe className="visualizacao" width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div className='botao'>
                        <button onClick={fechar}>x</button>
                    </div>
                </div>
            </section>
        )
    } else {
        return null;
    }
}