import './acoes.css'

import Comps from './comps/componentes';


import { VscHeart } from "react-icons/vsc";
import { RiChat3Line } from "react-icons/ri";
import { VscHeartFilled } from "react-icons/ri";
import { SlPaperPlane } from "react-icons/sl";
import { TfiBookmark } from "react-icons/tfi";



export default function Acoes() {
    return(
        <div className="informações">

            <div className='acoes'>
               <Comps curt={<VscHeart />} />
               <Comps coment={<RiChat3Line />} />
               <Comps enviar={<SlPaperPlane />} />
            </div>

            <div className="salvar">
               <span className='salvando'><Comps salvar={<TfiBookmark />} /></span>
            </div>
        </div>
    )
}