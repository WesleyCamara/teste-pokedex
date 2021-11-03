import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import api from '../../services/api.js';


const Details = () => {
  const params = useParams();
  console.log(params);

  const [pokemonData, setPokemonData] = useState(null);
  console.log('pokemonData: ', pokemonData);

  const getPokemon = async (id) => {
    await api
      .get(`pokemon/${id}`)
      .then((res) => setPokemonData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (params.id) getPokemon(params.id);
  }, []);

  return (
    <>
      {pokemonData && (
        <div className={styles.card}>
          <p>Nome: {pokemonData.name} </p>
          <p>#{pokemonData.id} </p>
          <img
            style={{ width: '100px' }}
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={pokemonData.name}
          />
        </div>
      )}
    </>
  );
};

export default Details;
