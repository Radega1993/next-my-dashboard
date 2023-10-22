import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'Lista de los pokemons'
}

export default async function PokemonsPage() {
    
    return (
      <div className="flex flex-col">

        <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global State</small></span>

        <PokemonGrid pokemons={[]}/>
      </div>
    )
  }
  