import { Navbar } from "@/components/Navbar/Navbar";
import PokemonList from "@/components/PokemonList";
import client from "@/apollo-client";
import { GET_POKEMONS } from "@/graphql/get-pokemons";

export async function getStaticProps() {
  const { data, loading, error } = await client.query({
    query: GET_POKEMONS,
    variables: { first: 60 },
  });

  const initialData = data.pokemons.slice(0, 60);

  return {
    props: { initialData },
  };
}

export default function Home({ initialData }) {

  return (
    <div className="container-bg">
      <Navbar />
      <div className="flex justify-center">
        <PokemonList initialData={initialData} />
      </div>
    </div>
  )
}
