import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGames";

interface Props {
  genres: Genre | null;
  platform: Platform | null;
}

function GameHeading({ genres, platform }: Props) {
  const heading = `${platform?.name || ""} ${genres?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
export default GameHeading;
