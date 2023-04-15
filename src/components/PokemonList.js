import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@/graphql/get-pokemons";
import PokemonCard from "@/components/PokemonCard";
import Link from "next/link";
import { useState } from "react";
import client from "@/apollo-client";

export default function PokemonList({ initialData }) {
  const {
    loading,
    error,
  } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
  });

  const PAGE_SIZE = 20;
  const [newData, setNewData] = useState(PAGE_SIZE);
  const [pokemonArray, setPokemonArray] = useState(initialData);
  const [displayedPokemons, setDisplayedPokemons] = useState(
    initialData.slice(0, PAGE_SIZE)
  );

  if (loading)
    return (
      <iframe
        src="https://embed.lottiefiles.com/animation/96855"
        className="loading"
      ></iframe>
    );
  if (error) return <p>Error : {error.message}</p>;

  const onNextHandler = async () => {
    const newLength = newData + PAGE_SIZE;
    setNewData(newData + PAGE_SIZE);
    const {
      data: { pokemons },
    } = await client.query({
      query: GET_POKEMONS,
      variables: { first: newLength },
    });
    setPokemonArray(pokemons);
    setDisplayedPokemons(pokemons.slice(newLength - PAGE_SIZE, newLength));
  };

  const onPrevHandler = () => {
    const newLength = newData - PAGE_SIZE;
    setNewData(newData - PAGE_SIZE);
    setDisplayedPokemons(pokemonArray.slice(newLength - PAGE_SIZE, newLength));
  }

  return (
    <>
    {console.log(pokemonArray)}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center my-4">
        {displayedPokemons.map((pokemon) => (
          <Link key={`${pokemon.id}-`} href={`/${pokemon.id}`}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </Link>
        ))}
        <button onClick={onPrevHandler} className="col-span-2 py-2 px-8 bg-red-600 text-white rounded-lg justify-self-auto shadow-xl shadow-zinc-700">Prev</button>
        <button
          onClick={onNextHandler}
          className="col-span-2 py-2 px-8 text-lg bg-red-600 text-white rounded-lg justify-self-auto shadow-xl shadow-zinc-700"
        >
          Next
        </button>
      </div>
    </>
  );
}
