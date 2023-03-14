import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaPredicate } from "react-media-hook";

import { getLocation } from '../../../servises/characters';

import s from "./characters-item.module.scss";

const CharactersItem = ({ item }) => {

    const mobile = useMediaPredicate("(max-width: 1051px)");

    const [state, setState] = useState({
        character: {},
        loading: false,
        error: null,
    });

    const { character, loading, error } = state;

    const { id: StrId } = useParams();
    const id = Number(StrId);

    
    useEffect(() => {
            const fetchCharacters = async () => {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                }))
                try {
                const characterEl = await getLocation(id);
                    setState((prevState) => {
                    return {
                        ...prevState,
                        loading: false,
                        character: { ...characterEl }
                    };
                    });
                } catch (error) {
                    setState(prevState => ({
                        ...prevState,
                        loading: false,
                        error,
                    }))
                }
            }
            if (id) {
        fetchCharacters()
        }  
    }, [id]);
    
    const location = () => {
        for (const key in character) {
            return character.name;
        }
    }
    
    const {
        name,
        image,
        species,
        gender,
        status,
        type } = item;
    
    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>Location not found</p>}
            {mobile
                ?
                <img
                    className={s.img}
                    src={image}
                    alt={name}
                    width="150"
                    height="150"
                />
                :
                <img
                    className={s.img}
                    src={image}
                    alt={name}
                    width="300"
                    height="300"
                />
            }
            <h2 className={s.name}>{name}</h2>

            <h3 className={s.informations}>Informations</h3>
            
            <div className={s.wrapper}>
                
                <p className={s.info}>
                    Gender <span className={s.infoName}>{gender}</span>
                </p>
                <p className={s.info}>
                    Status <span className={s.infoName}>{status}</span>
                </p>
                <p className={s.info}>
                    Specie <span className={s.infoName}>{species}</span>
                </p>
                <p className={s.info}>
                    Origin <span className={s.infoName}>{location()}</span>
                </p>
                <p className={s.type}>
                    Type  <span className={s.typeName}>{type ? type : "Unknown"}</span>
                </p>
            </div>
        </div>
    )
}

CharactersItem.defaultProps = {
  item: [],
};

CharactersItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
  }),
};

export default CharactersItem;