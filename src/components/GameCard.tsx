import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getImageCroppedURL from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        <Image src={getImageCroppedURL(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
