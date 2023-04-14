import { useQuery } from "@apollo/client"
import { GET_POKEMONS } from "@/graphql/get-pokemons"
import PokemonCard from "@/components/PokemonCard";
import Link from "next/link";
import { useState } from "react";

export default function PokemonList() {

  const { data: { pokemons = [] } = {}, loading, error, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { first: 20 }
  })

  const PAGE_SIZE = 20;
  const [displayedPokemons, setDisplayedPokemons] = useState(pokemons);
  const [first, setFirst] = useState(PAGE_SIZE);

  if (loading) return <iframe src="https://embed.lottiefiles.com/animation/96855" className="loading"></iframe>
  if (error) return <p>Error : {error.message}</p>


  const onNextHandler = () => {
    const newLength = displayedPokemons.length + PAGE_SIZE;
    setDisplayedPokemons(pokemons.slice(0, newLength));
    fetchMore({
      variables: {
        first: newLength,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          pokemons: fetchMoreResult.pokemons,
        };
      },
    });
  };
  
  // const onNextHandler = () => {
  //   const newLength = displayedPokemons.length + PAGE_SIZE;
  //   setDisplayedPokemons(pokemons.slice(0, newLength));
  //   setFirst(newLength);
  // };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-2/3 justify-items-center my-4">
        {pokemons.map((pokemon) => (
          <Link key={`${pokemon.id}-`} href={`/${pokemon.id}`}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </Link>
        ))}
        <button onClick={onNextHandler} className="col-span-4 py-2 px-4 bg-red-600 text-white rounded-lg justify-self-auto">Next</button>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const pageSize = PAGE_SIZE;
  const totalPokemonCount = 898; // total number of Pokemon available in the API
  const pageCount = Math.ceil(totalPokemonCount / pageSize);
  const paths = [];

  for (let i = 1; i <= Math.min(3, pageCount); i++) {
    paths.push({
      params: { page: i.toString() },
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const pageSize = PAGE_SIZE;
  const page = params.page ? parseInt(params.page, 10) : 1;
  const first = pageSize * page;
  const { data } = await client.query({
    query: gql`
      query Pokemons($first: Int!) {
        pokemons(first: $first) {
          id
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
            name
            id
          }
        }
      }
    `,
    variables: { first },
  });
  const pokemons = data.pokemons;

  return {
    props: {
      pokemons,
    },
    revalidate: 60,
  };
}