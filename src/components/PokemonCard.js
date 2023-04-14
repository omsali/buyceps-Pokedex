import Image from 'next/image'

const PokemonCard = ({ pokemon }) => {

    return (
        <div className='flex flex-col shadow-xl rounded-xl w-52 '>
            <Image 
            src={pokemon.image} 
            height='200' 
            width='200' 
            alt='Pokemons image'
            className='bg-gray-100 rounded-lg w-auto max-h-44 aspect-square' 
            />
            <div className='text-gray-500 text-sm'>#{pokemon.number}</div>
            <div className='text-2xl font-bold mx-3'>{pokemon.name}</div>
            <div className='flex gap-3 m-3 '>
            {pokemon && 
            pokemon.types && 
            pokemon.types.map((type) => <div className='bg-green-600 border-green-600 rounded-md px-3' key={type} >{type}</div>)}
          </div>
        </div>
    )
}

export default PokemonCard