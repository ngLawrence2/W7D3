import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    debugger;
    return (
      <div>
        <ul>
          {this.props.pokemon.map( pokemon => (<li>{pokemon.name} <img src={pokemon.image_url}></img></li>))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
