import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className='bg-blue-300 rounded-xl w-3/4 mt-8'>
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
          <div className='flex gap-3 m-3 '>
            {pokemon && 
            pokemon.types && 
            pokemon.types.map((type) => <div className='bg-green-400 border-green-400 rounded-md px-3' key={`${type}-${pokemon.name}`} >{type}</div>)}
            
          </div>
          <div className='font-semibold text-lg p-1 '>Weakness</div>
          <div className='flex gap-3 m-3'>
            {pokemon && 
            pokemon.weaknesses && 
            pokemon.weaknesses.map((weak) => <div className='bg-green-400 border-green-400 rounded-md px-3' key={`${weak}-${pokemon.number}`} >{weak}</div>)}
            
          </div>
          <div className='font-semibold text-lg p-1'>Resistant</div>
          <div className='flex gap-3 m-3'>
            {pokemon && 
            pokemon.resistant && 
            pokemon.resistant.map((resistant) => <div className='bg-green-400 border-green-400 rounded-md px-3' key={resistant} >{resistant}</div>)}
            
          </div>
        </div>
    </div>
  )
}

export default PokemonDetails