import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCropperImageUrl from "../Services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const GenreListSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
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
            {/* {isLoading&& <GenreListSkeleton/>} */}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
