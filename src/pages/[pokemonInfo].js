import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PokemonEvolution from '../components/PokemonEvolution'
import { AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import { GET_POKEMON } from '@/graphql/get-pokemons'
import { Navbar } from '@/components/Navbar/Navbar'
import PokemonDetails from '@/components/PokemonDetails'

const PokemonInfo = () => {

  const router = useRouter();
  const PokeID = router.query.pokemonInfo;
  
  const { data: { pokemon } = {}, loading, error } = useQuery(GET_POKEMON, {
    variables: { id: `${PokeID}` }
  })
  
  const [showEvo, setShowEvo] = useState(false);
  
  if(loading) return <iframe src="https://embed.lottiefiles.com/animation/96855" className="loading"></iframe>
  if(error) return <p>Error : {error.message}</p>

  return (
    <div>
      <Navbar />
      <div className='grid md:grid-cols-1 lg:grid-cols-2 my-4 justify-items-center'>
        <Image 
        src={pokemon &&pokemon.image} 
        height="600" 
        width="600" 
        alt="PokemonImage" 
        className='w-auto bg-gray-300  max-h-[500px] m-10 ' 
        />
        <PokemonDetails pokemon={pokemon} />
      </div>
          <button onClick={() => setShowEvo((prev) => !prev)}
          className='bg-blue-400 rounded-lg py-2 px-4 flex text-center m-8'
          >Evolution {showEvo ? <AiOutlineArrowUp /> : <AiOutlineArrowDown /> }</button>
          {showEvo && <PokemonEvolution />}
    </div>
  )
}

export default PokemonInfo