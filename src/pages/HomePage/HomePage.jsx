import { useMediaPredicate } from "react-media-hook";

import { useAuth } from '../../hooks/use-auth';

import CharactersList from '../../shared/components/CharactersList';
import UserMenu from '../../shared/components/UserMenu';

import img from '../../images/rick.png';
import imgMobile from '../../images/rick-mobile.png';
import s from './home-page.module.scss';

const HomePage = () => {

    const mobile = useMediaPredicate("(max-width: 1051px)");
    
    const { isAuth } = useAuth();

    return (
        <main>
            <div className="container">
                {isAuth && <UserMenu />}
                {mobile ? <img className={s.img} src={imgMobile} alt="Rick and Morty" /> : <img className={s.img} src={img} alt="Rick and Morty" />}
                <CharactersList />
            </div>
        </main> 
    )
}

export default HomePage;