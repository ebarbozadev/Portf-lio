import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { SiDelphi } from "react-icons/si";


export default function Tecnologias() {
    return (
        <section id="tecnologias">
            <h3># Tecnologias</h3>
            <div className="tecnologiasDiariamente">
                <h4>Tecnologias que uso diariamente</h4>
                <div className="tecnologiaDia-flex">
                    <div className="tech tech-javascript">
                        <i class="fa-brands fa-js"></i>
                        <p>JavaScript</p>
                    </div>

                    <div className="tech tech-react">
                        <i class="fa-brands fa-react"></i>
                        <p>ReactJS</p>
                    </div>

                    <div className="tech tech-github">
                        <i class="fa-brands fa-node-js"></i>
                        <p>NodeJS</p>
                    </div>

                    <div className="tech tech-github">
                        <i class="fa-solid fa-database"></i>
                        <p>MySQL</p>
                    </div>

                    <div className="tech tech-github">
                        <i class="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>

            <div className="tecnologiasTrabalhadas">
                <h4>Tecnologias que já trabalhei</h4>
                <div className="tecnologiaTrab-flex">
                    <div className="tech tech-dotnet">
                        <AiOutlineDotNet className="icone" />
                        <p>.NET</p>
                    </div>

                    <div className="tech tech-csharp">
                        <TbBrandCSharp className="icone" />
                        <p>C#</p>
                    </div>

                    <div className="tech tech-php">
                        <FaPhp className="icone" />
                        <p>PHP</p>
                    </div>

                    <div className="tech tech-pascal">
                        <SiDelphi className="icone" />
                        <p>Delphi</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
