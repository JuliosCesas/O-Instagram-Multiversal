import Iten from './comps/Iten';

import ImagemPerfil01 from './Imagens/Bruce.jpg';
import ImagemPerfil02 from './Imagens/Doutor Estranho.jpg';
import ImagemPerfil03 from './Imagens/Patrick.jpg';
import ImagemPerfil04 from './Imagens/Peter Quill.jpg';
import ImagemPerfil05 from './Imagens/Rock Lee.jpg';
import ImagemPerfil06 from './Imagens/Vegeta.jpg';


export default function ladodireito() {
    return(
        <div className='ladodireito'>

            <h3 className='titulo'>Suggestions For You</h3>
            
            <div className='sugestoes'>
                <Iten 

                    recomend={ImagemPerfil01}
                    nome='Bruce'
                    informa='Suggestions For You'
                    seguir='Follow'
                
                />
                
                <Iten 

                    recomend={ImagemPerfil02}
                    nome='Strange_1'
                    informa='Suggestions For You'
                    seguir='Follow'
            
                />
                
                <Iten 

                    recomend={ImagemPerfil03}
                    nome='Star_boy'
                    informa='Suggestions For You'
                    seguir='Follow'
        
                />
                
                <Iten 

                    recomend={ImagemPerfil04}
                    nome='Senhor_dasestrelas'
                    informa='Suggestions For You'
                    seguir='Follow'
        
                />
                
                <Iten 

                    recomend={ImagemPerfil05}
                    nome='Lee'
                    informa='Suggestions For You'
                    seguir='Follow'
    
                />
                
                <Iten 

                    recomend={ImagemPerfil06}
                    nome='ベジータ_Bejīta'
                    informa='Suggestions For You'
                    seguir='Follow'

                />
            


            </div>
        </div>
    )
}