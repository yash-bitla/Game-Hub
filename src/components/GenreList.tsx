import { HStack, Img, List, ListItem, Spinner, Button } from "@chakra-ui/react";
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
      <List>
        if (error) return None;
        {isLoading && <Spinner></Spinner>}
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Img
                src={getImageCroppedURL(data.image_background)}
                boxSize="32px"
                borderRadius={8}
              ></Img>
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
