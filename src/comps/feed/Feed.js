import './Feed.css';

import Post from './comps/post/Post';

import ImagemPerfil01 from './imagens/Perfil/Naruto.jpg';
import ImagemPerfil02 from './imagens/Perfil/Cebolinha.jpg';
import ImagemPerfil03 from './imagens/Perfil/Salsicha.jpg';
import ImagemPerfil04 from './imagens/Perfil/Obito.jpg';
import ImagemPerfil05 from './imagens/Perfil/Bob.jpg';
import ImagemPerfil06 from './imagens/Perfil/Tony.jpg';
import ImagemPerfil07 from './imagens/Perfil/Chewbacca.jpg';
import ImagemPerfil08 from './imagens/Perfil/Peter Parker.jpg';
import ImagemPerfil09 from './imagens/Perfil/Ben.jpg';


import ImagemPost01 from './imagens/Narutocomfamilia.jpg';
import ImagemPost02 from './imagens/Sansao_e_cebolinha.jpg';
import ImagemPost03 from './imagens/scooby-doo-e-salsicha-comendo.jpg';
import ImagemPost04 from './imagens/Obito e Rin.jpg';
import ImagemPost05 from './imagens/Haburguer-de-sir.jpg';
import ImagemPost06 from './imagens/Hamburguer de siri2.jpg';
import ImagemPost07 from './imagens/Morgan-Stark.jpg';
import ImagemPost08 from './imagens/Chewbacca-fotinho.jpg';
import ImagemPost09 from './imagens/Familia-Parker.jpg';
import ImagemPost10 from './imagens/Muito bom.jpg';




function Feed() {
    return(
        <div className='Feed'>
            <Post
               NomePerfil='うずまきナルト'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost01}
               NomePerfil1='うずまきナルト'
               Legenda="Familia, o maior tesouro!"    
            />

            <Post
               NomePerfil='Cebolinha_Menezes'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost02}
               NomePerfil1='Cebolinha_Menezes'
               Legenda="HA HA HA Meus planos são infáliveis!"    
            />   

            <Post
               NomePerfil='Norville_Billy67'
               ImagemPerfil={ImagemPerfil03} 
               ImagemPost={ImagemPost03}
               NomePerfil1='Norville_Billy67'
               Legenda="Fazendo o que mais gosto, com o meu melhor amigo!"
            />  

            <Post
               NomePerfil='うちはオビト'
               ImagemPerfil={ImagemPerfil04} 
               ImagemPost={ImagemPost04}
               NomePerfil1='うちはオビト'
               Legenda="A melhor pessoa do mundo. Faço de tudo para o seu bem!"
            /> 

            <Post
               NomePerfil='Bob1m99'
               ImagemPerfil={ImagemPerfil05} 
               ImagemPost={ImagemPost05}
               NomePerfil1='Bob1m99'
               Legenda="Um Hamburguer de siri que fiz hoje."
            />   

            <Post
               NomePerfil='Bob1m99'
               ImagemPerfil={ImagemPerfil05} 
               ImagemPost={ImagemPost06}
               NomePerfil1='Bob1m99'
               Legenda="Outro Hamburguer de siri que fiz hoje."
            />  

            <Post
               NomePerfil='Tony'
               ImagemPerfil={ImagemPerfil06} 
               ImagemPost={ImagemPost07}
               NomePerfil1='Tony'
               Legenda="Olha a cara de quem agora a pouco fez o escudo do picolé de trenó."
            /> 

            <Post
               NomePerfil='shyriiwook'
               ImagemPerfil={ImagemPerfil07} 
               ImagemPost={ImagemPost08}
               NomePerfil1='shyriiwook'
               Legenda="shyriiwook"
            /> 

            <Post
               NomePerfil='PeterP_14'
               ImagemPerfil={ImagemPerfil08} 
               ImagemPost={ImagemPost09}
               NomePerfil1='PeterP_14'
               Legenda="Família."
            /> 

            <Post
               NomePerfil='Ben_Tennyson16'
               ImagemPerfil={ImagemPerfil09} 
               ImagemPost={ImagemPost10}
               NomePerfil1='Ben_Tennyson16'
               Legenda="Fazendo o que eu mais amo."
            /> 

            

        </div>
    )
}

export default Feed;