import './LadoEsquerdo.css';

import Logo from './imagens/Instagram.png';
import ItemMenu from './comps/ItemMenu';
import Julio from '../ladoesquerdo/imagens/Minhaperfil.jpg';

import { VscHome } from "react-icons/vsc";
import { SlPaperPlane } from "react-icons/sl";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { VscSearch } from "react-icons/vsc";
import {VscCompass } from "react-icons/vsc";
import {SlHeart } from "react-icons/sl";
import {CgAddR } from "react-icons/cg";

import {FiAlignJustify } from "react-icons/fi";



export default function ladoesquerdo () {
    return (
        <div className="LadoEsquerdo">
            <div className='logo'>
                <img src={Logo} alt='logo do instagram' />
            </div>

            <div className='menu-principal'>

                <ItemMenu icone={<VscHome />} texto="Home" />
                <ItemMenu icone={<VscSearch />} texto="Search" />
                <ItemMenu icone={<VscCompass />} texto="Explore"/>
                <ItemMenu icone={<SlPaperPlane />} texto="Messages" />
                <ItemMenu icone={<SlHeart />} texto="Notifications" />
                <ItemMenu icone={<CgAddR />} texto="Create" />
                
                <div className='perfil'>
                    <img alt='Julio' src={Julio} />
                    <ItemMenu texto="Profile" />
                </div>
                
                <div className='menu'>
                    <ItemMenu icone={<FiAlignJustify />} texto="More"/>
                </div>
            </div>
            
            
        
        </div>
    )
}