import './Iten.css'

export default function Iten (props) {
    return(
        <div className="recomendacoes">

            

            <div className="perfil">

                <div className='imagemusuario'>
                    <img alt='perfilusuario' src={props.recomend} />
                </div>

                <div className='nomedeusuario'>
                    <div className='nome'>{props.nome}</div>
                    <div className='recomend'>{props.informa}</div>
                    <span className='seguir'>{props.seguir}</span>
                </div>
            </div>
        </div>
    )
}