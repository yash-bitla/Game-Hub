import {
  HStack,
  Img,
  List,
  ListItem,
  Spinner,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getImageCroppedURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenre();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        if (error) return None;
        {isLoading && <Spinner></Spinner>}
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                src={getImageCroppedURL(data.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              ></Image>
              <Button
                fontSize="md"
                variant="link"
                onClick={() => onSelectGenre(data)}
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  textAlign: "left",
                }}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default GenreList;
