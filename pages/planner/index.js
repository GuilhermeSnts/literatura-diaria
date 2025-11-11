import { useState } from "react";

function Planner(){

    const [showOptions, setShowOptions] = useState(false);

    function toggleOptions(){
        setShowOptions(!showOptions);
    }

    return(<div>
        
        <h1>Título</h1>
        <h3>Autor:</h3>
        <h5>Início: DD/MM/YYYY Fim: DD/MM/YYYY</h5>
        <div>estrelas</div>
        <p>Progresso: X%</p>
        <p>Meta de hoje: X capítulos (X páginas)</p>
        <p>Próxima meta: Dia X - Capítulos (páginas)</p>

        <button onClick={toggleOptions}>Opções</button>
        {
            showOptions &&
            <ul>
                <li>Exportar em pdf</li>
                <li>Exportar em csv</li>
            </ul>
        }
        <div>

            <button>Dia 1: Capítulos (páginas) - Concluir Meta</button>

            <ul>
                <li>Dia 1: Prefácio (p.7-18)</li>
            </ul>

        </div>


    </div>);
}

export default Planner;