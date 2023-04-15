import PokemonCard from "./PokemonCard";
import { useQuery } from "@apollo/client";
import styles from "../styles/evolution.module.css";
import { GET_POKEMON } from "@/graphql/get-pokemons";
import Link from "next/link";

const PokemonEvolution = ({ onClose, pokemon }) => {

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <div className='overlay'>
        <div className='modal'>
          <div className='flex justify-center'>
            <a href="" onClick={handleClose} className='bg-red-700 text-white py-2 px-8 rounded-lg'>
              <button>Close</button>
            </a>
          </div>
          <div className='p-[40px] flex justify-center gap-5 text-black'>
            {pokemon &&
              pokemon.evolutions &&
              pokemon.evolutions.map((evoPokemon) => (
                <Link key={`${pokemon.id}-`} href={`/${evoPokemon.id}`}>
                  <PokemonCard key={`${pokemon.id}--`} pokemon={evoPokemon} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonEvolution;
