import react, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import api from '../../services/api.js';

const Card = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null);
  console.log('pokemonData: ', pokemonData);

  const getPokemon = async () => {
    await api
      .get(`pokemon/${name}`)
      .then((res) => setPokemonData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemon();
  }, name);
  return (
    <>
      {pokemonData && (
        <div className={styles.card}>
          <p>Nome: {pokemonData.name} </p>
          <p>#{pokemonData.id} </p>
          <img
            style={{ width: '100px' }}
            src={pokemonData.sprites.other['official-artwork'].front_default}
          />
        </div>
      )}
    </>
  );
};

export default Card;
