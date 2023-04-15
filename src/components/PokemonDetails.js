import { useState } from 'react'
import PokemonEvolution from '../components/PokemonEvolution'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const PokemonDetails = ({ pokemon }) => {

  const [showEvo, setShowEvo] = useState(false);

  return (
    <div className='bg-black text-white rounded-xl w-3/4 mt-8 pt-4'>
      <div className='pl-8'>
        <div className='font-semibold text-lg p-1'>PokeId : # {pokemon && pokemon.number} </div>
        <div className='font-semibold text-lg p-1'>Name : {pokemon && pokemon.name}</div>
        <div className='font-semibold text-lg p-1'>
          Height : {pokemon &&
            pokemon.height &&
            pokemon.height.maximum}</div>
        <div className='font-semibold text-lg p-1'>
          Weight : {pokemon &&
            pokemon.weight &&
            pokemon.weight.maximum
          }
        </div>
        <div className='font-semibold text-lg p-1'>Type</div>
        <div className='flex flex-wrap gap-3 m-3 '>
          {pokemon &&
            pokemon.types &&
            pokemon.types.map((type) =>
              <div
                className='bg-red-700 border-red-700 rounded-md px-3'
                key={`${type}-${pokemon.name}`} >{type}</div>)}

        </div>
        <div className='font-semibold text-lg p-1 '>Weakness</div>
        <div className='flex flex-wrap gap-3 m-3'>
          {pokemon &&
            pokemon.weaknesses &&
            pokemon.weaknesses.map((weak) => 
            <div className='bg-red-700 border-red-700 rounded-md px-3' key={`${weak}-${pokemon.number}`} >{weak}</div>)}

        </div>
        <div className='font-semibold text-lg p-1'>Resistant</div>
        <div className='flex flex-wrap gap-3 m-3'>
          {pokemon &&
            pokemon.resistant &&
            pokemon.resistant.map((resistant) => <div className='bg-red-700 border-red-700 rounded-md px-3' key={resistant} >{resistant}</div>)}

        </div>
      </div>
      <button onClick={() => setShowEvo(true)}
        className='bg-red-700 text-white rounded-lg py-2 px-4 flex text-center m-8'
      >Evolution
      </button>
      {showEvo && <PokemonEvolution onClose={() => setShowEvo(false)} pokemon={pokemon} />}

    </div>
  )
}

export default PokemonDetails