import React, { useEffect, useState } from 'react';
import Header from './Header';
import PokemonCard from './PokemonCard';
import ExpandedContent from './ExpandedContent';
import './App.css';

function App() {

  const [getList, setList] = useState([]);
  const [getAPI, setAPI] = useState('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
  const [getModal,setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);


  const getAllPokemon = async () => {
    try {
      let response = await fetch(getAPI);
      let data = await response.json();
      console.log(data[0].results);		
      setAPI(data[0].next);
      let list = data[0].results;
      for await (let obj of list) {
        let responsePokemon = await fetch(obj.url);
        let dataPokemon = await responsePokemon.json();
        console.log(dataPokemon);
        setList((currentData) => [...currentData, dataPokemon[0]]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPokemon();
  }, [])

  const loadMorePokemon = () => {
    getAllPokemon();
  }

  const openModal=(pokemon)=>{
    setSelectedPokemon(pokemon);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  };


  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {getList.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} openModal={openModal} />
            ))}
          </div>
          <button className="load-more" onClick={loadMorePokemon}>
            More Pokemons
          </button>
        </div>
      </div>
      {getModal && <ExpandedContent pokemon={selectedPokemon} closeModal={closeModal} />}
    </div>
  );
}

export default App;
