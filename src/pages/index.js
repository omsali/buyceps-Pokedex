import { Navbar } from "@/components/Navbar/Navbar";
import PokemonList from "@/components/PokemonList";

export default function Home() {

  return (
    <div >
      <Navbar />
      <div className="flex justify-center">
      <PokemonList />
      </div>
    </div>
  )
}
