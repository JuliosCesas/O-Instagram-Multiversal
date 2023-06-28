
import './Post.css';

import Acoes from '../acoes/acoes';

export default function Post (props) {
    return(
        <div className='Post'>
            <div className='BarraSuperior'>
                <div className='ImagemPerfilAutor'>
                    <img alt='Perfil do Autor' src={props.ImagemPerfil} />
                </div>
                <div className='NomePerfilAutor'>{props.NomePerfil}</div>
                <div className='MenuBarraSuperior'></div>
            </div>

            <div className='ConteudoPost'>
                <img alt='Imagem do Post' src= {props.ImagemPost} />
            </div>

            <Acoes />

            <div className="Legenda">
                <span className="nomeautor">{props.NomePerfil1}</span>
                <span className="Legenda">{props.Legenda}</span>
            </div>
        </div>
    )
}

