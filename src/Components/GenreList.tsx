import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import { Genre } from "../Entities/Genre";
import getCropperImageUrl from "../Services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gamequery.genreId);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);
  const ListSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  if (error) {
    return null;
  }
  return (
    <>
      <Heading marginBottom={5} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCropperImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                key={genre.id}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
      {isLoading &&
        ListSkeleton.map((card) => <GenreListSkeleton key={card} />)}
    </>
  );
};

export default GenreList;
