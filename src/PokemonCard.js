import React from 'react';

function PokemonCard({ pokemon, openModal }) {
  return (
    <div className={`thumb-container ${pokemon.type}`} onClick={() => openModal(pokemon)}>
      <div className="number">
        <small>#{pokemon.id}</small>
      </div>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="detail-wrapper">
        <h3>{pokemon.name.toUpperCase()}</h3>
        <small>Type: {pokemon.type}</small>
        <button className="pokeinfo">Know more</button>
      </div>
    </div>
  );
}

export default PokemonCard;
