import './Story.css';

export default function Story(props) {
    return(
        <div className='Story'>

            <div className="boxzinho">
               <div className='ImgStory'>
                <img className='Imagem' alt='' src={props.ImgPerfil} />
               </div>

              <div className='NomeStory'>
                <span className='User'>{props.NomeDaConta}</span>
              </div>
            </div>
        </div>
    )
}