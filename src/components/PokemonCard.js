import Image from 'next/image'

const PokemonCard = ({ pokemon }) => {

    return (
        <div className='flex flex-col shadow-xl shadow-zinc-700 rounded-xl w-52 bg-white'>
            <Image
                src={pokemon.image}
                height='200'
                width='200'
                alt='Pokemons image'
                className='bg-transparent rounded-lg w-auto max-h-44 aspect-square px-2 pt-2'
            />
            <div className='text-gray-500 text-sm pl-2'>#{pokemon.number}</div>
            <div className='text-2xl font-bold mx-3'>{pokemon.name}</div>
            <div className='flex justify-center gap-3 m-3 '>
                {pokemon &&
                    pokemon.types &&
                    pokemon.types.map((type) => <div className='bg-red-600 border-red-600 text-white rounded-md px-3' key={type} >{type}</div>)}
            </div>
        </div>
    )
}

export default PokemonCard