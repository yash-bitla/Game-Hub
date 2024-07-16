import { HStack, Img, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getImageCroppedURL from "../services/image-url";

function GenreList() {
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
              <Text fontSize="lg">{data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default GenreList;
