import { FC } from 'react';
import './index.scss'
import hamburger from '../../assets/images/drawable-mdpi/hamburger.png'
import HondoLogo from '../../assets/images/drawable-mdpi/Hondo Logo.png'
import ProfileTop from '../../assets/images/drawable-mdpi/Profile Top.png'

export const Header: FC = () => {
    return <div id="header">
        <img src={hamburger} width={36} height={36} alt="..."/>
        <img src={HondoLogo} alt="..."/>
        <img src={ProfileTop} width={30} height={30} alt="..."/>
    </div>
}