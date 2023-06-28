import './componentes.css';

export default function comps(props) {
    return(
        <div className="informações">

            <div className="acoesbasicas">

             <span className='button'>{props.curt}</span>
             <span className='coment'>{props.coment}</span>
             <span className='enviar'>{props.enviar}</span>

            </div>

            <div className="salvar">
                    <span>{props.salvar}</span>
                </div>
       
       </div>
        )
}