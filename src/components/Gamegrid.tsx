import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  setSortedOrder: string | null;
  searchText: string | null;
}

function GameGrid({
  selectedGenre,
  selectedPlatform,
  setSortedOrder,
  searchText,
}: Props) {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    setSortedOrder,
    searchText
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <LoadingSkeleton key={skeleton}></LoadingSkeleton>
          ))}
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
