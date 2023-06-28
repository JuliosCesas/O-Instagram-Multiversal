import './Stories.css';

import Story from './comps/Story';

import Perfil01 from './imagens/Ben.jpg';
import Perfil02 from './imagens/Bob.jpg';
import Perfil03 from './imagens/Chewbacca.jpg';
import Perfil04 from './imagens/Cebolinha.jpg';
import Perfil05 from './imagens/Gohan.jpg';
import Perfil06 from './imagens/Goku.jpg';
import Perfil07 from './imagens/Hermione.jpg';
import Perfil08 from './imagens/Luke.jpg';
import Perfil09 from './imagens/Naruto.jpg';
import Perfil10 from './imagens/Obito.jpg';
import Perfil11 from './imagens/Peter Parker.jpg';
import Perfil12 from './imagens/Salsicha.jpg';
import Perfil13 from './imagens/Tony.jpg';


function Stories () {
    return(
        <div className='Stories'>
            <Story ImgPerfil={Perfil01} NomeDaConta='Ben_Tennyson16' />
            <Story ImgPerfil={Perfil02} NomeDaConta='Bob1m99' />
            <Story ImgPerfil={Perfil03} NomeDaConta='shyriiwook' />
            <Story ImgPerfil={Perfil04} NomeDaConta='Cebolinha_Menezes' />
            <Story ImgPerfil={Perfil05} NomeDaConta='孫 悟飯' />
            <Story ImgPerfil={Perfil06} NomeDaConta='孫悟空' />
            <Story ImgPerfil={Perfil07} NomeDaConta='Hermione1979' />
            <Story ImgPerfil={Perfil08} NomeDaConta='LastJedi_19ABY ' />
            <Story ImgPerfil={Perfil09} NomeDaConta='うずまきナルト' />
            <Story ImgPerfil={Perfil10} NomeDaConta='うちはオビト' />
            <Story ImgPerfil={Perfil11} NomeDaConta='PeterP_14' />
            <Story ImgPerfil={Perfil12} NomeDaConta='Norville_Billy67' />
            <Story ImgPerfil={Perfil13} NomeDaConta='Tony' />

        </div>
    )
}

export default Stories;