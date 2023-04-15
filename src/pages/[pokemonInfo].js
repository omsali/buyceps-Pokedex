import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { GET_POKEID, GET_POKEMON, GET_POKEMONS } from '@/graphql/get-pokemons'
import { Navbar } from '@/components/Navbar/Navbar'
import PokemonDetails from '@/components/PokemonDetails'
import client from '@/apollo-client'

// export async function getStaticPaths() {
  
//   const { data: { pokemons } } = await client.query({
//     query: GET_POKEID,
//     variables: { first: 20 }
//   });

//   const paths = pokemons.map((pokemon) => ({
//     params: { id: pokemon.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {

//   const { data } = await client.query({
//     query: GET_POKEMON,
//     variables: { id: params.id },
//   });

//   return { props: { pokemon: data.pokemon } };
// }



const PokemonInfo = () => {

  const router = useRouter();
  const PokeID = router.query.pokemonInfo;

  const { data: { pokemon } = {}, loading, error } = useQuery(GET_POKEMON, {
    variables: { id: `${PokeID}` }
  })


  if (loading) return <iframe src="https://embed.lottiefiles.com/animation/96855" className="loading"></iframe>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div>
      <Navbar />
    <div className="container-bg">
      <div className='grid md:grid-cols-1 lg:grid-cols-2 justify-items-center p-5 w-5/6 rounded-lg m-auto info-bg'>
        <Image
          src={pokemon && pokemon.image}
          height="600"
          width="600"
          alt="PokemonImage"
          className='w-auto rounded-lg fill-gray-200 max-h-[700px] m-auto'
        />
        <PokemonDetails pokemon={pokemon} />
      </div>

    </div>
    </div>
  )
}

export default PokemonInfo