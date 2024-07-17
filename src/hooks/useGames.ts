import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

interface GameGenre{
  id: number;
  name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    genre: GameGenre[];
  }

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, sortedOrder: string | null, searchText: string | null) => {
    return useData<Game>('/games', {
      params: 
      {
        genres: selectedGenre?.id, 
        parent_platforms: selectedPlatform?.id,
        ordering: sortedOrder,
        search: searchText
      }}, 
      [selectedGenre?.id, selectedPlatform?.id, sortedOrder, searchText])
}

export default useGames