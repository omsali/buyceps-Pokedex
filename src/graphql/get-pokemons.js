import gql from 'graphql-tag'

const GET_POKEMONS = gql`
query pokemons($first: Int!){
    pokemons(first: $first){
        id
        number
        name
        image
        types
        height{
          minimum
          maximum
        }
        
    }
}
`;

const GET_POKEMON = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      image
      types
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      weaknesses
      resistant
      evolutions {
        id
        name
      }
    }
  }
`;

export { GET_POKEMONS, GET_POKEMON };