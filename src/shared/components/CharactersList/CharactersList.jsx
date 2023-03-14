import { useState, useEffect } from 'react';
import { useMediaPredicate } from "react-media-hook";
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import { getCharacter } from '../../../servises/characters';

import s from './characters-list.module.scss';

const CharactersList = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const [search, setSearch] = useState('');

    const mobile = useMediaPredicate("(max-width: 1051px)");

    const from = useLocation();
    
    useEffect(() => {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));
            try {
                const { results } = await getCharacter();
                
                setState(prevState => ({
                    ...prevState,
                    items: [...results],
                    loading: false,
                }))
                localStorage.setItem('inputData', search);
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        }
        fetchMovies()
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const { items, loading, error } = state;

    useEffect(() => {
        const storedInputData = localStorage.getItem('inputData');
        if (storedInputData) {
            setSearch(storedInputData);
        }
    }, []);

    const changeSearch = items.filter(card => {
        return card.name.toLowerCase().includes(search.toLowerCase())
    });

    const elements = changeSearch.map(({ id, name, image, species }) => name !== undefined && <li className={s.item} key={id}>
        <Link className={s.link} to={`/character/${id}`} state={{ from }}>
            {mobile ? <img src={image} alt={image} width="312px"/> : <img src={image} alt={image} width="240px"/>}
            <div className={s.wrapper}>
                <p className={s.name}>{name}</p>
                <p className={s.species}>{species}</p>
            </div>
        </Link>
    </li>)
    
    return (
        <div className={s.container}>
            <form className={s.form}>
                <input
                    className={s.input}
                    name="search"
                    value={search}
                    onChange={handleChange}
                    type="text"
                    placeholder="Filter by name..."
                    required
                />
        </form>
            {loading && <p>...Loading</p>}
            {error && <p>Movies not found</p>}
             <ul className={s.list}>{elements}</ul>
        </div>
    )
}

CharactersList.defaultProps = {
  items: [],
};

CharactersList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default CharactersList;