import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCropperImageUrl from "../Services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropperImageUrl(genre.image_background)}
            />
            <Text fontSize="lg" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
