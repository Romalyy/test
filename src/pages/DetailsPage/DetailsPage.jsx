import { useState, useEffect } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import CharactersItem from '../../shared/components/CharactersItem';

import { getCharacterById } from '../../servises/characters';

import sprite from "../../images/sprite.svg"
import s from './details-page.scss';

const DetailsPage = () => {
  const mobile = useMediaPredicate("(max-width: 1051px)");
    
  const [state, setState] = useState({
    character: [],
    error: null,
  });

  const { character, error } = state;

  const { id: StrId } = useParams();
  const id = Number(StrId);

  const location = useLocation();
  const goBack = location?.state?.from ?? '/test';

    useEffect(() => {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
            }))
            try {
              const movieEl = await getCharacterById(id);
                setState((prevState) => {
                  return {
                    ...prevState,
                    character: { ...movieEl }
                  };
                  
                });
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
        }
        if (id) {
      fetchMovies()
    }
    }, [id]);
    
  const isMovie = Object.values(character).length >= 0;

    return (
        <>
          <div  className="container">
            {mobile
              ?
            <Link style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "700",
              marginLeft: "24px",
              marginTop: "23px",
              textTransform: "uppercase"
            }} to={goBack}> 
              <svg  style={{ marginRight: "8px" }} width="24px" height="24px">
                <use  href={`${sprite}#icon-arrow_back`}></use>
              </svg>
              <p className={s.goBack}>Go back</p>  
            </Link> 
              :
            <Link style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "700",
              marginLeft: "50px",
              marginTop: "21px",
              textTransform: "uppercase"
            }} to={goBack}>
              <svg  style={{ marginRight: "8px" }} width="24px" height="24px">
                <use  href={`${sprite}#icon-arrow_back`}></use>
              </svg>
              <p className={s.goBack}>Go back</p>      
            </Link>}
              <div className={s.wrapper}>
                {error && <p>Character not found</p>}
                {isMovie && <CharactersItem item={character}/>}
              </div>
          </div>
            <Outlet />
        </>
    );
}

export default DetailsPage;
