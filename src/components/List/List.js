import react, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import api from '../../services/api.js';
import styles from './List.module.css';

const List = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    await api
      .get('pokemon')
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <section className={styles.list}>
      {pokemons && pokemons.map((item) => <Card name={item.name} />)}
    </section>
  );
};

export default List;
