import { connect } from 'redux-react';
import { selectAllPokemon } from '../../reducers/selector';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
